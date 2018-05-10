


export function data(){
    let x = [
                {
                    name: "指南",
                    id:"1",
                    children: [
                        {
                            name: "设计原则",
                            id:"1",
                            children: [
                                {
                                    name: "一致",
                                    id:"1",
                                },
                                {
                                    name: "反馈",
                                    id:"2",
                                },
                                {
                                    name: "效率",
                                    id:"3",
                                },
                                {
                                    name: "可控",
                                    id:"4",
                                },
                            ]
                        },
                        {
                            name: "导航",
                            id:"2",
                            children: [
                                {
                                    name: "侧向导航",
                                    id:"1",
                                },
                                {
                                    name: "顶部导航",
                                    id:"2",
                                },
                            ]
                        },
                    ]
                },
                {
                    name: "资源",
                    id:"2",
                    children: [
                        {
                            name: "Axure Components",
                            id:"1",
                        },
                        {
                            name: "Sketch Templates",
                            id:"2",
                        },
                        {
                            name: "组件交互文档",
                            id:"3",
                        },
                    ]
                },
            ];
    return x;
}
