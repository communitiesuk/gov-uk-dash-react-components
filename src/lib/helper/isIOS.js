export function isIOSDevice() {
	return typeof navigator !== 'undefined' && Boolean(navigator.userAgent.match(/(iPod|iPhone|iPad)/g) && navigator.userAgent.match(/AppleWebKit/g))
}