__NUXT_JSONP__("/post/522", (function(a,b){return {data:[{article:{cid:522,title:"原项目代码分析",slug:"522",created:1508113680,modified:1572255013,text:"\u003C!--markdown--\u003E\r\n\u003Cspan style=\"font-size: 12pt;\"\u003E\u003Cstrong\u003E原项目代码类图\r\n\u003C\u002Fstrong\u003E\u003C\u002Fspan\u003E\r\n\r\n\u003Cimg src=\"http:\u002F\u002Fthinkmoonmagic.files.wordpress.com\u002F2017\u002F10\u002F093017_1914_11.jpg\" alt=\"\" \u002F\u003E\r\n\r\n\u003Cspan style=\"font-size: 12pt;\"\u003E\u003Cstrong\u003E各类文件解析（按难度排序）\r\n\u003C\u002Fstrong\u003E\u003C\u002Fspan\u003E\r\n\u003Cblockquote\u003E\r\n\u003Col\u003E\r\n\t\u003Cli\u003E\u003Cstrong\u003EPoint (坐标类，使用经度，维度用来表示一个点)\r\n\u003C\u002Fstrong\u003E\u003C\u002Fli\u003E\r\n\u003C\u002Fol\u003E\r\n\u003C\u002Fblockquote\u003E\r\n\u003Cimg src=\"http:\u002F\u002Fthinkmoonmagic.files.wordpress.com\u002F2017\u002F10\u002F093017_1914_12.png\" alt=\"\" \u002F\u003E\r\n\r\nPoint.h\r\n\u003Col\u003E\r\n\t\u003Cli\u003E\r\n\u003Cdiv style=\"background: white;\"\u003E\u003Cspan style=\"color: gray; font-family: Consolas; font-size: 9pt;\"\u003E#\u003Cspan style=\"color: black;\"\u003E  \u003Cspan style=\"color: #5c5c5c;\"\u003E\r\n\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E\r\n\u003Cdiv style=\"background: #f8f8f8;\"\u003E\u003Cspan style=\"color: black; font-family: Consolas; font-size: 9pt;\"\u003Epragma once \u003Cspan style=\"color: #006699;\"\u003E\u003Cstrong\u003Eclass\u003C\u002Fstrong\u003E\u003Cspan style=\"color: black;\"\u003E Point {  \u003Cspan style=\"color: #5c5c5c;\"\u003E\r\n\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E\r\n\u003Cdiv style=\"background: white;\"\u003E\u003Cspan style=\"color: black; font-family: Consolas; font-size: 9pt;\"\u003E    \u003Cspan style=\"color: #006699;\"\u003E\u003Cstrong\u003Epublic\u003C\u002Fstrong\u003E\u003Cspan style=\"color: black;\"\u003E: Point(\u003Cspan style=\"color: #006699;\"\u003E\u003Cstrong\u003Edouble\u003C\u002Fstrong\u003E\u003Cspan style=\"color: black;\"\u003E longitude, \u003Cspan style=\"color: #006699;\"\u003E\u003Cstrong\u003Edouble\u003C\u002Fstrong\u003E\u003Cspan style=\"color: black;\"\u003E latitdue);  \u003Cspan style=\"color: #5c5c5c;\"\u003E\r\n\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E\r\n\u003Cdiv style=\"background: #f8f8f8;\"\u003E\u003Cspan style=\"color: black; font-family: Consolas; font-size: 9pt;\"\u003E    bool operator == (Point & point);  \u003Cspan style=\"color: #5c5c5c;\"\u003E\r\n\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E\r\n\u003Cdiv style=\"background: white;\"\u003E\u003Cspan style=\"color: black; font-size: 9pt;\"\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E    \u003Cspan style=\"color: #006699;\"\u003E\u003Cstrong\u003Eprivate\u003C\u002Fstrong\u003E\u003Cspan style=\"color: black;\"\u003E: \u003Cspan style=\"color: #006699;\"\u003E\u003Cstrong\u003Edouble\u003C\u002Fstrong\u003E\u003Cspan style=\"color: black;\"\u003E longitude; \u003Cspan style=\"color: #008200;\"\u003E\u002F\u002F\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: 微软雅黑;\"\u003E经度\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E  \u003Cspan style=\"color: #5c5c5c;\"\u003E\r\n\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E\r\n\u003Cdiv style=\"background: #f8f8f8;\"\u003E\u003Cspan style=\"color: black; font-size: 9pt;\"\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E    \u003Cspan style=\"color: #006699;\"\u003E\u003Cstrong\u003Edouble\u003C\u002Fstrong\u003E\u003Cspan style=\"color: black;\"\u003E latitude; \u003Cspan style=\"color: #008200;\"\u003E\u002F\u002F\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: 微软雅黑;\"\u003E纬度\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E  \u003Cspan style=\"color: #5c5c5c;\"\u003E\r\n\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E\r\n\u003Cdiv style=\"background: white;\"\u003E\u003Cspan style=\"color: black; font-family: Consolas; font-size: 9pt;\"\u003E};  \u003Cspan style=\"color: #5c5c5c;\"\u003E\r\n\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\r\n\u003Col\u003E\r\n\t\u003Cli\u003E\u003Cstrong\u003ERoad(道路类，使用两个点来表示一条道路)\r\n\u003C\u002Fstrong\u003E\u003C\u002Fli\u003E\r\n\u003C\u002Fol\u003E\r\n\u003Cimg src=\"http:\u002F\u002Fthinkmoonmagic.files.wordpress.com\u002F2017\u002F10\u002F093017_1914_13.png\" alt=\"\" \u002F\u003E\r\n\r\nRoad.h\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E\r\n\u003Cdiv style=\"background: white;\"\u003E\u003Cspan style=\"color: gray; font-family: Consolas; font-size: 9pt;\"\u003E#\u003Cspan style=\"color: black;\"\u003E  \u003Cspan style=\"color: #5c5c5c;\"\u003E\r\n\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E\r\n\u003Cdiv style=\"background: #f8f8f8;\"\u003E\u003Cspan style=\"color: black; font-family: Consolas; font-size: 9pt;\"\u003Epragma once# include \u003Cspan style=\"color: blue;\"\u003E\"stdafx.h\"\u003Cspan style=\"color: black;\"\u003E#  \u003Cspan style=\"color: #5c5c5c;\"\u003E\r\n\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E\r\n\u003Cdiv style=\"background: white;\"\u003E\u003Cspan style=\"color: black; font-family: Consolas; font-size: 9pt;\"\u003Einclude \u003Cspan style=\"color: blue;\"\u003E\"Point.h\"\u003Cspan style=\"color: black;\"\u003E#  \u003Cspan style=\"color: #5c5c5c;\"\u003E\r\n\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E\r\n\u003Cdiv style=\"background: #f8f8f8;\"\u003E\u003Cspan style=\"color: black; font-family: Consolas; font-size: 9pt;\"\u003Einclude \u003Cspan style=\"color: blue;\"\u003E\"Vehicle.h\"\u003Cspan style=\"color: black;\"\u003E#  \u003Cspan style=\"color: #5c5c5c;\"\u003E\r\n\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E\r\n\u003Cdiv style=\"background: white;\"\u003E\u003Cspan style=\"color: black; font-family: Consolas; font-size: 9pt;\"\u003Einclude \u003Cspan style=\"color: blue;\"\u003E\"TrafficLight.h\"\u003Cspan style=\"color: black;\"\u003E#  \u003Cspan style=\"color: #5c5c5c;\"\u003E\r\n\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E\r\n\u003Cdiv style=\"background: #f8f8f8;\"\u003E\u003Cspan style=\"color: black; font-family: Consolas; font-size: 9pt;\"\u003Einclude \u003Cspan style=\"color: blue;\"\u003E\"BitMatrix.h\"\u003Cspan style=\"color: black;\"\u003E#  \u003Cspan style=\"color: #5c5c5c;\"\u003E\r\n\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E\r\n\u003Cdiv style=\"background: white;\"\u003E\u003Cspan style=\"color: black; font-size: 9pt;\"\u003E\u003Cspan style=\"font-family: Consolas;\"\u003Edefine R 6378 \u003Cspan style=\"color: #008200;\"\u003E\u002F\u002F\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: 微软雅黑;\"\u003E地球的平均半径\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E  \u003Cspan style=\"color: #5c5c5c;\"\u003E\r\n\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E\r\n\u003Cdiv style=\"background: #f8f8f8;\"\u003E\u003Cspan style=\"color: gray; font-size: 9pt;\"\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E# define PI 3.14# define LANNE_AMOUNT 3 \u002F\u002F\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: 微软雅黑;\"\u003E每条道路的车道数量\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E \u003Cspan style=\"color: black;\"\u003E  \u003Cspan style=\"color: #5c5c5c;\"\u003E\r\n\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E\r\n\u003Cdiv style=\"background: white;\"\u003E\u003Cspan style=\"color: gray; font-size: 9pt;\"\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E# define MIN_VEHICLE 10 \u002F\u002F\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: 微软雅黑;\"\u003E初始状态每条道路的最少车辆\u003C\u002Fspan\u003E\u003Cspan style=\"color: black; font-family: Consolas;\"\u003E  \u003Cspan style=\"color: #5c5c5c;\"\u003E\r\n\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E\r\n\u003Cdiv style=\"background: #f8f8f8;\"\u003E\u003Cspan style=\"color: gray; font-family: Consolas; font-size: 9pt;\"\u003E# define VEHICLE_SIZE 70 class Vehicle;\u003Cspan style=\"color: black;\"\u003E  \u003Cspan style=\"color: #5c5c5c;\"\u003E\r\n\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E\r\n\u003Cdiv style=\"background: white;\"\u003E\u003Cspan style=\"color: #006699; font-family: Consolas; font-size: 9pt;\"\u003E\u003Cstrong\u003Eclass\u003C\u002Fstrong\u003E\u003Cspan style=\"color: black;\"\u003E TrafficLight;  \u003Cspan style=\"color: #5c5c5c;\"\u003E\r\n\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E\r\n\u003Cdiv style=\"background: #f8f8f8;\"\u003E\u003Cspan style=\"color: #006699; font-family: Consolas; font-size: 9pt;\"\u003E\u003Cstrong\u003Eclass\u003C\u002Fstrong\u003E\u003Cspan style=\"color: black;\"\u003E Road {  \u003Cspan style=\"color: #5c5c5c;\"\u003E\r\n\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E\r\n\u003Cdiv style=\"background: white;\"\u003E\u003Cspan style=\"color: black; font-family: Consolas; font-size: 9pt;\"\u003E    \u003Cspan style=\"color: #006699;\"\u003E\u003Cstrong\u003Epublic\u003C\u002Fstrong\u003E\u003Cspan style=\"color: black;\"\u003E: Road(\u003Cspan style=\"color: #006699;\"\u003E\u003Cstrong\u003Edouble\u003C\u002Fstrong\u003E\u003Cspan style=\"color: black;\"\u003E longitude1, \u003Cspan style=\"color: #006699;\"\u003E\u003Cstrong\u003Edouble\u003C\u002Fstrong\u003E\u003Cspan style=\"color: black;\"\u003E latitude1, \u003Cspan style=\"color: #006699;\"\u003E\u003Cstrong\u003Edouble\u003C\u002Fstrong\u003E\u003Cspan style=\"color: black;\"\u003E longitude2, \u003Cspan style=\"color: #006699;\"\u003E\u003Cstrong\u003Edouble\u003C\u002Fstrong\u003E\u003Cspan style=\"color: black;\"\u003E latitude2): point1(longitude1, latitude1), point2(longitude2, latitude2) {  \u003Cspan style=\"color: #5c5c5c;\"\u003E\r\n\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E\r\n\u003Cdiv style=\"background: #f8f8f8;\"\u003E\u003Cspan style=\"color: black; font-size: 9pt;\"\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E        length = R * 2 * asin(sqrt(pow(sin((latitude1 \u002F 180 * PI - latitude2 \u002F 180 * PI) \u002F 2), 2) + cos(latitude1 \u002F 180 * PI) * cos(latitude2 \u002F 180 * PI) * pow(sin((longitude1 \u002F 180 * PI - longitude2 \u002F 180 * PI) \u002F 2), 2))); \u003Cspan style=\"color: #008200;\"\u003E\u002F\u002F\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: 微软雅黑;\"\u003E计算道路长度\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E  \u003Cspan style=\"color: #5c5c5c;\"\u003E\r\n\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E\r\n\u003Cdiv style=\"background: white;\"\u003E\u003Cspan style=\"color: black; font-family: Consolas; font-size: 9pt;\"\u003E    }  \u003Cspan style=\"color: #5c5c5c;\"\u003E\r\n\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E\r\n\u003Cdiv style=\"background: #f8f8f8;\"\u003E\u003Cspan style=\"color: black; font-size: 9pt;\"\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E    bool operator == (Road & road); \u003Cspan style=\"color: #008200;\"\u003E\u002F\u002F\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: 微软雅黑;\"\u003E用于判断两条道路是否相连\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E  \u003Cspan style=\"color: #5c5c5c;\"\u003E\r\n\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E\r\n\u003Cdiv style=\"background: white;\"\u003E\u003Cspan style=\"color: black; font-size: 9pt;\"\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E    \u003Cspan style=\"color: #006699;\"\u003E\u003Cstrong\u003Edouble\u003C\u002Fstrong\u003E\u003Cspan style=\"color: black;\"\u003E countVehicleDensity(\u003Cspan style=\"color: #006699;\"\u003E\u003Cstrong\u003Evoid\u003C\u002Fstrong\u003E\u003Cspan style=\"color: black;\"\u003E); \u003Cspan style=\"color: #008200;\"\u003E\u002F\u002F\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: 微软雅黑;\"\u003E计算行车密度，\u003C\u002Fspan\u003E\u003Cspan style=\"color: #008200;\"\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E \u003C\u002Fspan\u003E\u003Cspan style=\"font-family: 微软雅黑;\"\u003E行车密度\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E = \u003C\u002Fspan\u003E\u003Cspan style=\"font-family: 微软雅黑;\"\u003E车辆数\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E \u002F (\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: 微软雅黑;\"\u003E道路长度\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E(km) * \u003C\u002Fspan\u003E\u003Cspan style=\"font-family: 微软雅黑;\"\u003E车道数）\u003C\u002Fspan\u003E\u003Cspan style=\"color: black; font-family: Consolas;\"\u003E  \u003Cspan style=\"color: #5c5c5c;\"\u003E\r\n\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E\r\n\u003Cdiv style=\"background: #f8f8f8;\"\u003E\u003Cspan style=\"color: black; font-size: 9pt;\"\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E    \u003Cspan style=\"color: #006699;\"\u003E\u003Cstrong\u003Edouble\u003C\u002Fstrong\u003E\u003Cspan style=\"color: black;\"\u003E countCrowdExtent(\u003Cspan style=\"color: #006699;\"\u003E\u003Cstrong\u003Evoid\u003C\u002Fstrong\u003E\u003Cspan style=\"color: black;\"\u003E); \u003Cspan style=\"color: #008200;\"\u003E\u002F\u002F\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: 微软雅黑;\"\u003E计算道路拥挤度\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E  \u003Cspan style=\"color: #5c5c5c;\"\u003E\r\n\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E\r\n\u003Cdiv style=\"background: white;\"\u003E\u003Cspan style=\"color: black; font-size: 9pt;\"\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E    \u003Cspan style=\"color: #006699;\"\u003E\u003Cstrong\u003Edouble\u003C\u002Fstrong\u003E\u003Cspan style=\"color: black;\"\u003E returnLength(\u003Cspan style=\"color: #006699;\"\u003E\u003Cstrong\u003Evoid\u003C\u002Fstrong\u003E\u003Cspan style=\"color: black;\"\u003E); \u003Cspan style=\"color: #008200;\"\u003E\u002F\u002F\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: 微软雅黑;\"\u003E返回道路长度\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E  \u003Cspan style=\"color: #5c5c5c;\"\u003E\r\n\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E\r\n\u003Cdiv style=\"background: #f8f8f8;\"\u003E\u003Cspan style=\"color: black; font-size: 9pt;\"\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E    bool enterVehicle(\u003Cspan style=\"color: #006699;\"\u003E\u003Cstrong\u003Evoid\u003C\u002Fstrong\u003E\u003Cspan style=\"color: black;\"\u003E); \u003Cspan style=\"color: #008200;\"\u003E\u002F\u002F\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: 微软雅黑;\"\u003E当前道路是否能进车\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E  \u003Cspan style=\"color: #5c5c5c;\"\u003E\r\n\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E\r\n\u003Cdiv style=\"background: white;\"\u003E\u003Cspan style=\"color: black; font-size: 9pt;\"\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E    \u003Cspan style=\"color: #006699;\"\u003E\u003Cstrong\u003Evoid\u003C\u002Fstrong\u003E\u003Cspan style=\"color: black;\"\u003E updateVehicle(vector \u003C Road \u003E & road); \u003Cspan style=\"color: #008200;\"\u003E\u002F\u002F\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: 微软雅黑;\"\u003E更新当前道路的车辆\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E  \u003Cspan style=\"color: #5c5c5c;\"\u003E\r\n\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E\r\n\u003Cdiv style=\"background: #f8f8f8;\"\u003E\u003Cspan style=\"color: black; font-size: 9pt;\"\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E    \u003Cspan style=\"color: #006699;\"\u003E\u003Cstrong\u003Evoid\u003C\u002Fstrong\u003E\u003Cspan style=\"color: black;\"\u003E creatVehicle(\u003Cspan style=\"color: #006699;\"\u003E\u003Cstrong\u003Eint\u003C\u002Fstrong\u003E\u003Cspan style=\"color: black;\"\u003E roadSize, \u003Cspan style=\"color: #006699;\"\u003E\u003Cstrong\u003Eint\u003C\u002Fstrong\u003E\u003Cspan style=\"color: black;\"\u003E totalRoadSize, BitMatrix & roadBitMatrix, vector \u003C Road \u003E & road); \u003Cspan style=\"color: #008200;\"\u003E\u002F\u002F\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: 微软雅黑;\"\u003E为该道路生成车辆\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E  \u003Cspan style=\"color: #5c5c5c;\"\u003E\r\n\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E\r\n\u003Cdiv style=\"background: white;\"\u003E\u003Cspan style=\"color: black; font-size: 9pt;\"\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E    \u003Cspan style=\"color: #006699;\"\u003E\u003Cstrong\u003Evoid\u003C\u002Fstrong\u003E\u003Cspan style=\"color: black;\"\u003E enterVehicle(Vehicle & vehicle); \u003Cspan style=\"color: #008200;\"\u003E\u002F\u002F\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: 微软雅黑;\"\u003E进入车辆\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E  \u003Cspan style=\"color: #5c5c5c;\"\u003E\r\n\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E\r\n\u003Cdiv style=\"background: #f8f8f8;\"\u003E\u003Cspan style=\"color: black; font-size: 9pt;\"\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E    \u003Cspan style=\"color: #006699;\"\u003E\u003Cstrong\u003Evoid\u003C\u002Fstrong\u003E\u003Cspan style=\"color: black;\"\u003E updateTrafficLight(\u003Cspan style=\"color: #006699;\"\u003E\u003Cstrong\u003Evoid\u003C\u002Fstrong\u003E\u003Cspan style=\"color: black;\"\u003E); \u003Cspan style=\"color: #008200;\"\u003E\u002F\u002F\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: 微软雅黑;\"\u003E更新当前道路的交通灯\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E  \u003Cspan style=\"color: #5c5c5c;\"\u003E\r\n\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E\r\n\u003Cdiv style=\"background: white;\"\u003E\u003Cspan style=\"color: black; font-size: 9pt;\"\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E    \u003Cspan style=\"color: #008200;\"\u003E\u002F*  \u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: 微软雅黑;\"\u003E计算拥挤度的公式\u003C\u002Fspan\u003E\u003Cspan style=\"color: #008200; font-family: Consolas;\"\u003E:   crowdExtent = 0.15 * exp(-0.0322 * vehicleDensity) - 0.15 (vehicleDensity \u003C= 45.5)   crowdExtent = 0.111 * vehicleDensity - 0.0152 (vehicleDensity \u003E 45.5)    *\u002F\u003Cspan style=\"color: black;\"\u003E  \u003Cspan style=\"color: #5c5c5c;\"\u003E\r\n\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E\r\n\u003Cdiv style=\"background: #f8f8f8;\"\u003E\u003Cspan style=\"color: black; font-size: 9pt;\"\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E    vector \u003C \u003Cspan style=\"color: #006699;\"\u003E\u003Cstrong\u003Eint\u003C\u002Fstrong\u003E\u003Cspan style=\"color: black;\"\u003E \u003E adjoin; \u003Cspan style=\"color: #008200;\"\u003E\u002F\u002F\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: 微软雅黑;\"\u003E存储相连的道路编号\u003C\u002Fspan\u003E\u003Cspan style=\"color: #008200;\"\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E   \u003C\u002Fspan\u003E\u003Cspan style=\"font-family: 微软雅黑;\"\u003E是否改成\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: Consolas;\"\u003Eprivate?\u003Cspan style=\"color: black;\"\u003E  \u003Cspan style=\"color: #5c5c5c;\"\u003E\r\n\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E\r\n\u003Cdiv style=\"background: white;\"\u003E\u003Cspan style=\"color: black; font-size: 9pt;\"\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E    \u003Cspan style=\"color: #006699;\"\u003E\u003Cstrong\u003Eprivate\u003C\u002Fstrong\u003E\u003Cspan style=\"color: black;\"\u003E: Point point1, point2; \u003Cspan style=\"color: #008200;\"\u003E\u002F\u002F\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: 微软雅黑;\"\u003E道路的两个端点的经纬度\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E  \u003Cspan style=\"color: #5c5c5c;\"\u003E\r\n\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E\r\n\u003Cdiv style=\"background: #f8f8f8;\"\u003E\u003Cspan style=\"color: black; font-size: 9pt;\"\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E    \u003Cspan style=\"color: #006699;\"\u003E\u003Cstrong\u003Edouble\u003C\u002Fstrong\u003E\u003Cspan style=\"color: black;\"\u003E length, vehicleDensity, crowdExtent; \u003Cspan style=\"color: #008200;\"\u003E\u002F\u002Flength\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: 微软雅黑;\"\u003E为道路的长度\u003C\u002Fspan\u003E\u003Cspan style=\"color: #008200;\"\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E,vehicleDensity\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: 微软雅黑;\"\u003E为行车密度\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E,crowdExtent\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: 微软雅黑;\"\u003E为道路拥挤度\u003C\u002Fspan\u003E\u003Cspan style=\"color: black; font-family: Consolas;\"\u003E  \u003Cspan style=\"color: #5c5c5c;\"\u003E\r\n\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E\r\n\u003Cdiv style=\"background: white;\"\u003E\u003Cspan style=\"color: black; font-size: 9pt;\"\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E    list \u003C Vehicle \u003E vehicle; \u003Cspan style=\"color: #008200;\"\u003E\u002F\u002F\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: 微软雅黑;\"\u003E当前道路的车辆表\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E  \u003Cspan style=\"color: #5c5c5c;\"\u003E\r\n\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E\r\n\u003Cdiv style=\"background: #f8f8f8;\"\u003E\u003Cspan style=\"color: black; font-size: 9pt;\"\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E    TrafficLight trafficLight; \u003Cspan style=\"color: #008200;\"\u003E\u002F\u002F\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: 微软雅黑;\"\u003E交通灯用于控制车辆进入该道路\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E  \u003Cspan style=\"color: #5c5c5c;\"\u003E\r\n\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E\r\n\u003Cdiv style=\"background: white;\"\u003E\u003Cspan style=\"color: black; font-size: 9pt;\"\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E    \u003Cspan style=\"color: #006699;\"\u003E\u003Cstrong\u003Eint\u003C\u002Fstrong\u003E\u003Cspan style=\"color: black;\"\u003E vehicleSize; \u003Cspan style=\"color: #008200;\"\u003E\u002F\u002F\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: 微软雅黑;\"\u003E当前道路车辆数\u003C\u002Fspan\u003E\u003Cspan style=\"font-family: Consolas;\"\u003E  \u003Cspan style=\"color: #5c5c5c;\"\u003E\r\n\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E\r\n\u003Cdiv style=\"background: #f8f8f8;\"\u003E\u003Cspan style=\"color: black; font-family: Consolas; font-size: 9pt;\"\u003E};  \u003Cspan style=\"color: #5c5c5c;\"\u003E\r\n\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\r\n\u003Cblockquote\u003E分析与思考：存储相连采用向量方式？这样真的好吗？一条条道路判断相等再连接？\u003C\u002Fblockquote\u003E\r\n\u003C\u002Fli\u003E\r\n\u003C\u002Fol\u003E",order:a,authorId:1,type:"post",status:"publish",commentsNum:a,allowComment:b,allowPing:b,allowFeed:b,parent:a,views:381,likes:a}}],fetch:{},mutations:void 0}}(0,"1")));