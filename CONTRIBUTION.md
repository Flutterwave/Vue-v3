##Contribution and Development Docs

This guide contains steps on how to  setup, contribute, build and publish to the Flutterwave Vue package.

The library is generated using 'vue-sfc-rollup' package . This package creates a set of files for building Vue libraries to simplify  the build and deployment process.

###Get started

* Install the 'vue-sfc-rollup' package.

````ignorelang
npm install -g vue-sfc-rollup
````

* Pull down project from github.

* Run  'npm install' in project root folder
 ```ignorelang
 npm install
```

###File Structure
The library code files are located in './src' folder


###Code Contribution
Please follow the guidelines below when adding features, components, etc  to the library.

* Library files should be in the './src' folder

* Components should be created in the './src/lib-components' folder

* All components in the 'src/lib-components' folder should be exported in the  'src/lib-components/index.js'
 file 

* Components are tested  in the dev folder.


###Build And Publish

To build, run :

 ```ignorelang
npm run build 
```

To publish, run 

 ```ignorelang
npm publish 
```
