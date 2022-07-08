import {CoordinateMap, PointObject} from '../../types';
// https://stackoverflow.com/questions/18295825/determine-if-point-is-within-bounding-box

export default function findBlockContainsPoint(
		coordinateMap: CoordinateMap,
		point: PointObject
) {
	const len = coordinateMap.length;

	for (let i = 0; i < len; i++) {
		const data = coordinateMap[i];
		if (!data) continue;
		const {rect} = data;
		const {top, right, bottom, left} = rect;
		const {x, y} = point;
		const falsy = left < x && x < right && y > top && y < bottom;

		if (falsy) return data;
	}

	return null;
}
