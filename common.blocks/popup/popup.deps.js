({
    mustDeps: [
    	{block: 'i-bem', elems:['dom']},
    	{block: 'jquery', elems:['pointerclick']},
    ],
    shouldDeps: [
    	{elems: ['under', 'layout']},
    	{block:'popup', elem: 'layout', mods: {scroll: 'yes'}},
    	{block:'popup', mods: {to: 'right'}},
    	{block:'popup', mods: {to: 'left'}},
	]
})