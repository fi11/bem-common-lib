[
    {
        mustDeps: [       
            { block: 'i-bem', elems: ['dom'] },
            { block: 'BEMHTML'}
    	],
        shouldDeps: [
            { block: 'tooltip', mods: { visible: true } },
        	'popup',
        	{block:  'popup', elems: ['under', 'layout', 'tail']},
        	{block:  'popup', mods: {visibility: 'visible', theme: 'default'}},
    	]
    },
    {
        tech: 'js',
        shouldDeps: [
            { tech: 'bemhtml', block: 'i-bem' },
            { tech: 'bemhtml', block: 'popup' },
        ]
    }
]