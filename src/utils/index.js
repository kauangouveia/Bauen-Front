export function isBackspace(event) {
  return event.nativeEvent.inputType === "deleteContentBackward";
}
