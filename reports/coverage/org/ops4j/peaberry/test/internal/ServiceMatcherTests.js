var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = { "classes" : [
    {"id" : 442, "sl" : 35, "el" : 128, "name" : "ServiceMatcherTests",
    "methods" : [
             {"sl" : 73, "el" : 80, "sc" : 3},  {"sl" : 82, "el" : 85, "sc" : 3},  {"sl" : 87, "el" : 92, "sc" : 3},  {"sl" : 94, "el" : 98, "sc" : 3},  {"sl" : 100, "el" : 102, "sc" : 3},  {"sl" : 104, "el" : 115, "sc" : 3},  {"sl" : 117, "el" : 121, "sc" : 3},  {"sl" : 123, "el" : 127, "sc" : 3}  ]}
    ,
    {"id" : 442, "sl" : 38, "el" : 38, "name" : "ServiceMatcherTests.MetaAnnotation",
    "methods" : [
             ]}
    ,
    {"id" : 442, "sl" : 42, "el" : 42, "name" : "ServiceMatcherTests.MetaService",
    "methods" : [
             ]}
    ,
    {"id" : 442, "sl" : 46, "el" : 46, "name" : "ServiceMatcherTests.MetaLeased",
    "methods" : [
              ]}
    
 ]
};

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {
		"test_8" : {
					  "name" : "leasedSpec",
					  "pass" : true ,
					  "methods" : [{"sl": 73 },{"sl": 94 },{"sl": 123 },],
					  "statements" : [{"sl": 74 },{"sl": 75 },{"sl": 95 },{"sl": 96 },{"sl": 97 },{"sl": 124 },{"sl": 125 },{"sl": 126 },]
					  },
		"test_17" : {
					  "name" : "handlesNull",
					  "pass" : true ,
					  "methods" : [{"sl": 100 },],
					  "statements" : [{"sl": 101 },]
					  },
		"test_20" : {
					  "name" : "serviceSpec",
					  "pass" : true ,
					  "methods" : [{"sl": 73 },{"sl": 87 },{"sl": 117 },],
					  "statements" : [{"sl": 74 },{"sl": 75 },{"sl": 88 },{"sl": 89 },{"sl": 90 },{"sl": 91 },{"sl": 118 },{"sl": 119 },{"sl": 120 },]
					  },
		"test_21" : {
					  "name" : "run",
					  "pass" : true ,
					  "methods" : [{"sl": 73 },{"sl": 82 },{"sl": 87 },{"sl": 94 },{"sl": 100 },{"sl": 104 },{"sl": 117 },{"sl": 123 },],
					  "statements" : [{"sl": 74 },{"sl": 75 },{"sl": 83 },{"sl": 84 },{"sl": 88 },{"sl": 89 },{"sl": 90 },{"sl": 91 },{"sl": 95 },{"sl": 96 },{"sl": 97 },{"sl": 101 },{"sl": 105 },{"sl": 106 },{"sl": 107 },{"sl": 108 },{"sl": 109 },{"sl": 110 },{"sl": 111 },{"sl": 112 },{"sl": 113 },{"sl": 114 },{"sl": 118 },{"sl": 119 },{"sl": 120 },{"sl": 124 },{"sl": 125 },{"sl": 126 },]
					  },
		"test_7" : {
					  "name" : "missingAnnotations",
					  "pass" : true ,
					  "methods" : [{"sl": 73 },{"sl": 82 },{"sl": 104 },],
					  "statements" : [{"sl": 74 },{"sl": 75 },{"sl": 83 },{"sl": 84 },{"sl": 105 },{"sl": 106 },{"sl": 107 },{"sl": 108 },{"sl": 109 },{"sl": 110 },{"sl": 111 },{"sl": 112 },{"sl": 113 },{"sl": 114 },]
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
  [ 21 , 20 , 8 , 7   ] ,
  [ 21 , 20 , 8 , 7   ] ,
  [ 21 , 20 , 8 , 7   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 21 , 7   ] ,
  [ 21 , 7   ] ,
  [ 21 , 7   ] ,
  [  ] ,
  [  ] ,
  [ 21 , 20   ] ,
  [ 21 , 20   ] ,
  [ 21 , 20   ] ,
  [ 21 , 20   ] ,
  [ 21 , 20   ] ,
  [  ] ,
  [  ] ,
  [ 21 , 8   ] ,
  [ 21 , 8   ] ,
  [ 21 , 8   ] ,
  [ 21 , 8   ] ,
  [  ] ,
  [  ] ,
  [ 21 , 17   ] ,
  [ 21 , 17   ] ,
  [  ] ,
  [  ] ,
  [ 21 , 7   ] ,
  [ 21 , 7   ] ,
  [ 21 , 7   ] ,
  [ 21 , 7   ] ,
  [ 21 , 7   ] ,
  [ 21 , 7   ] ,
  [ 21 , 7   ] ,
  [ 21 , 7   ] ,
  [ 21 , 7   ] ,
  [ 21 , 7   ] ,
  [ 21 , 7   ] ,
  [  ] ,
  [  ] ,
  [ 21 , 20   ] ,
  [ 21 , 20   ] ,
  [ 21 , 20   ] ,
  [ 21 , 20   ] ,
  [  ] ,
  [  ] ,
  [ 21 , 8   ] ,
  [ 21 , 8   ] ,
  [ 21 , 8   ] ,
  [ 21 , 8   ] ,
  [  ] ,
  [  ] 
];