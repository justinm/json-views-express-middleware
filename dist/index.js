"use strict";
function middleware(view) {
    return function (req, res, next) {
        res.view = function (descriptorName, data) {
            res.send(view.view(descriptorName, data));
        };
        next(null);
    };
}
exports.middleware = middleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUEsb0JBQTJCLElBQTJCO0lBQ3BELE1BQU0sQ0FBQyxVQUFTLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUF3QjtRQUNuRixHQUFHLENBQUMsSUFBSSxHQUFHLFVBQVUsY0FBc0IsRUFBRSxJQUFTO1lBQ3BELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUM7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDLENBQUM7QUFDSixDQUFDO0FBUGUsa0JBQVUsYUFPekIsQ0FBQSJ9