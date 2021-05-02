__NUXT_JSONP__("/post/295", (function(a,b){return {data:[{article:{cid:295,title:"【leetcode】1. two sum两数之和",slug:"295",created:1554110520,modified:1579054330,text:"\u003C!--markdown--\u003E![leetcode(1): two sum][1]\r\n## Description\r\nGiven an array of integers, return indices of the two numbers such that they add up to a specific target.\r\n\r\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\r\n\r\nExample:\r\n```c\r\nGiven nums = [2, 7, 11, 15], target = 9,\r\n\r\nBecause nums[0] + nums[1] = 2 + 7 = 9,\r\nreturn [0, 1].\r\n```\r\n\r\n## 0. My solution(Brute Force)\r\n```javascript\r\nvar twoSum = function(nums, target) {\r\n    for(let i = 0; i \u003C nums.length; i++) {\r\n        for(let j = 0; j \u003C nums.length; j++) {\r\n            if(nums[i] + nums[j] === target && i != j) {\r\n                return [i, j]\r\n            }\r\n        }\r\n    }\r\n};\r\n```\r\n· Time complexity: O(n^2), For each element, I try to find its complement by looping through the rest of array which takes O(n)*O(n) time. Therefore, the time complexity is O(n^2).\r\n\r\n· Space complexity : O(1). \r\n\r\n## 1. Improve\r\n```javascript\r\nvar twoSum = function(nums, target) {\r\n    for(let i = 0; i \u003C nums.length; i++) {\r\n        for(let j = i + 1; j \u003C nums.length; j++) {\r\n            if(nums[i] + nums[j] === target) {\r\n                return [i, j]\r\n            }\r\n        }\r\n    }\r\n};\r\n```\r\n## 2. Improve again\r\n```javascript\r\nvar twoSum = function(nums, target) {\r\n    for(var i = 0; i\u003C nums.length; i++){\r\n        var complement = target - nums[i];\r\n        var found = nums.indexOf(complement, i + 1);\r\n        if(found !== -1){\r\n            return [i, found];\r\n        }\r\n    }\r\n    return [0, 0];\r\n};\r\n```\r\n## 3. Improve again\r\n```javascript\r\nvar twoSum = function(nums, target) {\r\n    if (nums.length === 2) return [0, 1];\r\n    const len = nums.length;\r\n    let hashTable = {};\r\n\tfor(let i = 0; i \u003C len; i++){\r\n\t\t\u002F\u002F Add a new obj to the hashTable where key = nums[i] and value = i\r\n\t\thashTable[nums[i]] = i;\r\n\t}\r\n\t\r\n    for(let i = 0; i \u003C len; i++) {\r\n        let complement = target - nums[i];\r\n        let found = hashTable[complement]; \u002F\u002F Determine whether the complement exist in the hashTable\r\n        if(found !== undefined && found != i) return [i, found];\r\n\t}\r\n\treturn [0,0];\r\n}\r\n```\r\n[B站视频地址](https:\u002F\u002Fwww.bilibili.com\u002Fvideo\u002Fav83229623\u002F)\r\n\r\n  [1]: https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2020-01-13T04:11:52.png",order:a,authorId:1,type:"post",status:"publish",commentsNum:a,allowComment:b,allowPing:b,allowFeed:b,parent:a,views:696,likes:2}}],fetch:{},mutations:void 0}}(0,"1")));