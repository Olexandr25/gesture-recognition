import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe 3 finger down gesture  
const ThreeDown = new GestureDescription('three_down');


// thumb full curl:
ThreeDown.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1);
ThreeDown.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);


// index no curl:
ThreeDown.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
ThreeDown.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);
ThreeDown.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 0.5);
ThreeDown.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 0.5);

// middle no curl:
ThreeDown.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
ThreeDown.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1.0);
ThreeDown.addDirection(Finger.Middle, FingerDirection.DiagonalDownLeft, 0.5);
ThreeDown.addDirection(Finger.Middle, FingerDirection.DiagonalDownRight, 0.5);

// ring no curl:
ThreeDown.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
ThreeDown.addDirection(Finger.Ring, FingerDirection.VerticalDown, 1.0);
ThreeDown.addDirection(Finger.Ring, FingerDirection.DiagonalDownLeft, 0.5);
ThreeDown.addDirection(Finger.Ring, FingerDirection.DiagonalDownRight, 0.5);

// pinky full curl:
ThreeDown.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);


export default ThreeDown;
