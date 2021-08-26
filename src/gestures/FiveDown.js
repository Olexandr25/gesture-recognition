import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe 5 finger down gesture 
const FiveDown = new GestureDescription('five_down');


// thumb full curl:
FiveDown.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1,0);
FiveDown.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);


// index no curl:
FiveDown.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
FiveDown.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);
FiveDown.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 0.5);
FiveDown.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 0.5);

// middle no curl:
FiveDown.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
FiveDown.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1.0);
FiveDown.addDirection(Finger.Middle, FingerDirection.DiagonalDownLeft, 0.5);
FiveDown.addDirection(Finger.Middle, FingerDirection.DiagonalDownRight, 0.5);

// ring no curl:
FiveDown.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
FiveDown.addDirection(Finger.Ring, FingerDirection.VerticalDown, 1.0);
FiveDown.addDirection(Finger.Ring, FingerDirection.DiagonalDownLeft, 0.5);
FiveDown.addDirection(Finger.Ring, FingerDirection.DiagonalDownRight, 0.5);

// pinky no curl:
FiveDown.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
FiveDown.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 1.0);
FiveDown.addDirection(Finger.Pinky, FingerDirection.DiagonalDownLeft, 0.5);
FiveDown.addDirection(Finger.Pinky, FingerDirection.DiagonalDownRight, 0.5);


export default FiveDown;
