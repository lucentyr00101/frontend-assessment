# Mindarc Frontend Assessment

## Directory

 - Exercise #1 - mindarc-assessment
 - Exercise #2 - exercise-2

## Guidelines

 1. Clone the repository `git clone https://github.com/lucentyr00101/frontend-assessment.git`.
 2. Navigate to the desired directory.
 3. Run `npm i` or `npm install` to install the packages needed.
 4. After installation, run `npm run dev` to start the local server.
 5. Then access `127.0.0.1:5173` in your browser to view the assessment.

## Technologies Used

 - [Bootstrap](https://getbootstrap.com/) - *grid and reset only*
 - [Vue JS](https://vuejs.org/guide/introduction.html#what-is-vue)
 - Typescript

## The reason why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`

`('b' + 'a' + + 'a' + 'a').toLowerCase()` will be evaluated as `('b' + 'a' + (+'a') + 'a').toLowerCase()`

 1. string `b` will be concatenated with string `a` resulting to string `ba`
 2. javascript will try to convert the second `a` to a number due to the unary plus, since it is a string it will result in `NaN`, our result now would be `baNaN`
 3. the last string `a` would be concatenated to the previous string resulting in `baNaNa`
 4. `toLowerCase()` converts all the characters to lowercase, thus resulting in `banana`