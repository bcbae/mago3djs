'use strict';

/**
 * 어떤 일을 하고 있습니까?
 * @class PolyLine
 */
var PolyLine = function() 
{
	if (!(this instanceof PolyLine)) 
	{
		throw new Error(Messages.CONSTRUCT_ERROR);
	}

	this.point3dArray;
};

/**
 * Creates a new Point3D.
 * @class PolyLine
 */
PolyLine.prototype.newPoint3d = function(x, y, z)
{
	if(this.point3dArray === undefined)
		this.point3dArray = [];
	
	var point3d = new Point3D(x, y, z);
	this.point3dArray.push(point3d);
	return point3d;
};

/**
 * Creates a new Point3D.
 * @class PolyLine
 */
PolyLine.prototype.deleteObjects = function()
{
	var pointsCount = this.point3dArray.length;
	for(var i=0; i<pointsCount; i++)
	{
		this.point3dArray[i].deleteObjects();
		this.point3dArray[i] = undefined;
	}
	this.point3dArray = undefined;
};

/**
 * Creates a new Point3D.
 * @class PolyLine
 */
PolyLine.prototype.getPoints = function(resultPointsArray)
{
	if(resultPointsArray === undefined)
		resultPointsArray = [];
	
	var point;
	
	var pointsCount = this.point3dArray.length;
	for(var i=0; i<pointsCount; i++)
	{
		point = new Point3D();
		point.copyFrom(this.point3dArray[i]); 
		point.pointType = 1; // mark as "important point".***
		resultPointsArray.push(point);
	}
	
	return resultPointsArray;
};











































