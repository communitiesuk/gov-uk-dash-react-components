export const keyCodes: Record<KeyboardEvent["keyCode"], string> = {
	13: 'enter',
	27: 'escape',
	32: 'space',
	38: 'up',
	40: 'down'
}

// Todo: 'keyCode' is deprecated.
export function isPrintableKeyCode(keyCode: KeyboardEvent["keyCode"]) {
	return (
		(keyCode > 47 && keyCode < 58) || // number keys
		keyCode === 32 || keyCode === 8 || // spacebar or backspace
		(keyCode > 64 && keyCode < 91) || // letter keys
		(keyCode > 95 && keyCode < 112) || // numpad keys
		(keyCode > 185 && keyCode < 193) || // ;=,-./` (in order)
		(keyCode > 218 && keyCode < 223) // [\]' (in order)
	)
}
