

export const jsonVisualCode = {
    global: {
        tabEnableClose: false,
        tabEnableFloat: false
    },
    borders: [
        {
            type: 'border',
            location: 'top',
            selected: 0,
            enableDrop: false,
            size: 20,
            children: [
                {
                    type: 'tab',
                    name: 'Menu',
                    component: 'menu'
                }

            ]
        },
        {
            type: 'border',
            location: 'left',
            selected: 0,
            enableDrop: false,
            size: 300,
            children: [
                {
                    weight: 100,
                    enableDrag: true,
                    enableRename: false,
                    enableClose: false,
                    type: 'tab',
                    name: 'Project',
                    component: 'sidebar'
                }

            ]
        }
    ],

    layout: {
        type: 'row',
        id: 'visualEditCode',
        weight: 100,
        children: [
            {
                type: 'tabset',
                weight: 50,
                selected: 0,
                children: [
                    {
                        enableMaximize: true,
                        enableDivide: false,
                        "enableDrag": true,
                        "enableRename": false,
                        enableClose: true,
                        id: 'default_code',
                        type: 'tab',
                        name: 'Editor de código',
                        component: 'visualcode'
                    }
                ],
                "active": true
            }
        ]
    }
}

