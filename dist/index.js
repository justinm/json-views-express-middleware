"use strict";
function middleware(serializer) {
    return function (req, res, next) {
        res.serialize = function (descriptorName, data) {
            res.send(serializer.serialize(descriptorName, data));
        };
        next(null);
    };
}
exports.middleware = middleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUEsb0JBQTJCLFVBQWlEO0lBQzFFLE1BQU0sQ0FBQyxVQUFTLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUF3QjtRQUNuRixHQUFHLENBQUMsU0FBUyxHQUFHLFVBQVUsY0FBc0IsRUFBRSxJQUFTO1lBQ3pELEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUM7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDLENBQUM7QUFDSixDQUFDO0FBUGUsa0JBQVUsYUFPekIsQ0FBQSJ9