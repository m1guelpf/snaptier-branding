const cp = require('child_process')

for (let n = 5; n <= 12; n++) {
	const res = 2 ** n
	const path = `png/logo-${res}.png`
	cp.exec([
		'inkscape',
		`--export-png=${path}`,
		`--export-width=${res}`,
		`--export-height=${res}`,
		'svg/logo.svg'
	].join(' '), err => console.log(err ||`Exported ${path}`))
}
