/*
* Script Name: Image to Binary Converter
* Version: 0.1
* Description: Display the result of conversation image file to binary
* Required: ESToolKit
* This is an early version that has not been sufficiently tested. Use at your own risks.
* License: GNU General Public License Version 3. (http://www.gnu.org/licenses/gpl-3.0-standalone.html)
*
* Copyright (c) 26/08/2014. Aleksandr "M.O.Z.G" Dikov.
* http://www.mozg-studio.org

* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.

* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.

* You should have received a copy of the GNU General Public License
* along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

var fileInput = File.openDialog('Select a Image for Conversation', 'PNG:*.png, JPG:*.jpg, IDRC:*.idrc');
fileInput.open ("r"); fileInput.encoding = "binary";
var temp = fileInput.read(); fileInput.close();
var myWindow = new Window ("dialog", "Image to Binary Converter - Output");
var myText = myWindow.add ("edittext", [0, 0, 512, 384], "", {multiline: true});
myText.text = temp.toSource();
myWindow.add ("button", undefined, "Close", {name: "cancel"});
myText.active = true;
myWindow.show ();
