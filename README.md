## QantasGroupAccommodation APP task by Qian Peng

## setup

Clone or download the project

Open terminal and switch the path to the root folder of this project, run ```npm install```

## Build and run the project

After installed all the dependencies, run ```npm run start``` to build and run the project

Once the project compiled successfully, open http://localhost:4200/ to see the page on browsers. Tested in Chrome, Firefox and Safari (MacOS Big Sur)

<img width="1342" alt="UI" src="https://user-images.githubusercontent.com/19439515/201502573-639b097f-5b29-4aa9-9837-6624327e1049.png">

## Running unit tests

Run ```npm run test``` to execute the unit tests via [Karma](https://karma-runner.github.io). Should pass 17 tests in total.

<img width="1169" alt="unit tests" src="https://user-images.githubusercontent.com/19439515/201502501-cb24b0d3-f4ee-4dd1-a5c8-9af6403a7d51.png">

## Some comments 

In this task, I use angular as the base framework and bootstrap for the UI library, and  font awesome for rating icons.

Some comments about the thoughts of the technical points in this task:

About the rating feature: In the given response data, there are both integer and decimal number of rating scores, so before showing the rating icons should check if the score is an integer or a decimal number. If it is a decimal number, should get the integer number before the decimal point, as ngFor loop only support integer number in the html, then should show a half style icon in the last position in UI. Also need to check the rating type to show the correct icons.

About the price feature: In the given response data, the price amount are decimal numbers, but in the mock the price are integer numbers and with the currency symbol. So I used angular built-in currency pipe to format the display price and saving price. Uage: https://angular.io/api/common/CurrencyPipe

About the price sorting feature: I use a custom pipe called sort  with two inputs (the target property and sort direction) to sort the list. I want this pipe to be used for most of the nested objects. The difficult point is the we don’t know how the level target property is in the object. I got stuck here for a while, but I got some idea online. So we need the first input should be an array of all the parent property names of the target property, and then should use this array in a loop function to find out the property in the object, then sort the object (see sort.pipe.ts)

About unit tests: As required, I add unit tests for each component in the spec.ts files. The difficult points are: sometimes need to be aware of the dependence of parent/child components ,importing modules and assigning mock-data to component. I got stuck and spent some time to solve those issues in unit tests.


