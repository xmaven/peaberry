var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = { "classes" : [
    {"id" : 163, "sl" : 30, "el" : 90, "name" : "NonDelegatingClassLoaderHook",
    "methods" : [
              {"sl" : 43, "el" : 69, "sc" : 9},  {"sl" : 50, "el" : 67, "sc" : 13},  {"sl" : 75, "el" : 84, "sc" : 3},  {"sl" : 86, "el" : 89, "sc" : 3}  ]}
    
 ]
};

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {
		"test_12" : {
					  "name" : "run",
					  "pass" : true ,
					  "methods" : [{"sl": 43 },{"sl": 50 },{"sl": 75 },],
					  "statements" : [{"sl": 45 },{"sl": 54 },{"sl": 55 },{"sl": 56 },{"sl": 57 },{"sl": 60 },{"sl": 66 },{"sl": 76 },{"sl": 79 },{"sl": 83 },]
					  },
		"test_5" : {
					  "name" : "run",
					  "pass" : true ,
					  "methods" : [{"sl": 50 },{"sl": 75 },],
					  "statements" : [{"sl": 54 },{"sl": 66 },{"sl": 76 },{"sl": 79 },{"sl": 83 },]
					  }
 };

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [  [],   [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 12   ] ,
  [  ] ,
  [ 12   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 12 , 5   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 12 , 5   ] ,
  [ 12   ] ,
  [ 12   ] ,
  [ 12   ] ,
  [  ] ,
  [  ] ,
  [ 12   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 12 , 5   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 12 , 5   ] ,
  [ 12 , 5   ] ,
  [  ] ,
  [  ] ,
  [ 12 , 5   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 12 , 5   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] 
];