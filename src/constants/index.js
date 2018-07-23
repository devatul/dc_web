const data = {
    menu:[
        {
            id: 'home',
            label:'HOME',
            link:'/home',
            divider: false
        },
        {
            id: 'solutions',
            label:'SOLUTIONS',
            link:'/solutions',
            divider: false
        },
        {
            id: 'media',
            label:'MEDIA',
            link:'/media',
            divider: false
        },
        {
            id: 'about',
            label:'ABOUT',
            link:'/about', 
            divider: true
        }
    ],
    page: {
        home: {
            title: 'We Simplify Operations',
            description: 'Through Innovations in __________________',
            articles:[
                {
                    id: 'home_article_1',
                    group: null,
                    title: 'A That Actually Works.',
                    description: 'Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. Machinify radically simplifies and accelerates your ability to use AI to unlock the value in your data and deliver guaranteed ROI.',
                    image: null,
                    theme: 'grey',
                    layout: 'title'
                },
                {
                    id: 'home_article_2',
                    group: null,
                    title: 'Read Our Story',
                    description: null,
                    link:'/company',
                    image: null,
                    theme: 'grey',
                    layout: 'button'
                },
                {
                    id: 'home_article_3',
                    title:'Go from raw data to productionized AI in&nbsp;minutes.', 
                    description:'Machinify’s ability to automate data collection, data transformation, AI creation and product deployment shrinks the time from from product idea to AI deployed into production from 6-9 months to a matter of minutes.&nbsp;Really.', 
                    image:'bg-image1',
                    theme: 'dark',
                    layout: 'left'
                },
                {
                    id: 'home_article_4',
                    title:'Unleash AI across your&nbsp;company.', 
                    description:'Machinify makes AI accessible to domain experts and analysts in all parts of your organization.  Collaboration and change management tools enable your entire enterprise to benefit from each team’s insights and&nbsp;advances.', 
                    image:'bg-image2',
                    theme: 'dark',
                    layout: 'right'
                },
                {
                    id: 'home_article_5',
                    title:'AI built for you, controlled by&nbsp;you.', 
                    description:'Create lasting competitive advantage by unlocking the value in your own proprietary data.  Our partnership model gives you full control of mission critical products and&nbsp;processes.', 
                    image:'bg-image3',
                    theme: 'dark',
                    layout: 'left'
                },
                {
                    id: 'home_article_6',
                    title:'Immediate ROI',
                    description:'Avoid expensive and time-consuming startup efforts. Machinify enables to you deploy AI-driven products quickly and start generating ROI right away.', 
                    image:'bg-image4',
                    theme: 'dark',
                    layout: 'right'
                },
                {
                    id: 'home_article_7',
                    group: null,
                    title: 'The Machinify System',
                    description: 'We’ve integrated the power of intelligent automation, intuitive controls and cluster computing into a complete system comprised of three elements:',
                    image: null,
                    theme: 'light',
                    layout: 'title'
                },
                {
                    id: 'home_article_8',
                    group:'AI Cloud',
                    title:'Adaptive data infra built specifically for AI.',
                    description:'The first data cloud built specifically for the rigors developing AI models, the Machinify AI Cloud accepts and efficiently stores all common data types with zero&nbsp;configuration.',
                    image:'bg-image1',
                    theme: 'light',
                    layout: 'left'
                },
                {
                    id: 'home_article_9',
                    group:'AI Studio',
                    title:'Build models with zero scripting or coding.',
                    description:'Create all data transformations, build AI models by creating formulas in an intuitive user interface.  Tedious scripting is a thing of the&nbsp;past.',
                    image:'bg-image2',
                    theme: 'light',
                    layout: 'right'
                },
                {
                    id: 'home_article_10',
                    group: 'AI Runtime',
                    title: 'Deploy to production in an instant',
                    description: 'With a single click, Machinify automatically generates a production version of your AI model. Our simple yet powerful API efficiently returns predictions in&nbsp;milliseconds.',
                    image: 'bg-image3',
                    theme: 'light',
                    layout: 'left'
                },
                {
                    id: 'home_article_11',
                    group: null,
                    title: 'Learn More',
                    description: null,
                    link:'/company',
                    image: null,
                    theme: 'light',
                    layout: 'button'
                },
                {
                    id: 'home_article_12',
                    group: null,
                    title: 'Our Team',
                    description: 'From the outset, we’ve sought to build Machinify into a customer-first company that solves real problems and delivers real results.  Each member of our team reflects that commitment. We’ve brought together leaders in the fields of software development, machine learning, data science and business.',
                    image: null,
                    theme: 'grey',
                    layout: 'title'
                },
                {
                    id: 'home_article_13',
                    group: null,
                    title: 'Meet The Company Team',
                    description: null,
                    link:'/company',
                    image: null,
                    theme: 'grey',
                    layout: 'button'
                }
            ]
        },
        solutions: {
            title: 'We Simplify Operations',
            description: 'Through Innovations in __________________',
            articles:[
                {
                    id: 'home_article_1',
                    group: null,
                    title: 'A That Actually Works.',
                    description: 'Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. Machinify radically simplifies and accelerates your ability to use AI to unlock the value in your data and deliver guaranteed ROI.',
                    image: null,
                    theme: 'grey',
                    layout: 'title'
                },
                {
                    id: 'home_article_2',
                    group: null,
                    title: 'Read Our Story',
                    description: null,
                    link:'/company',
                    image: null,
                    theme: 'grey',
                    layout: 'button'
                },
                {
                    id: 'home_article_3',
                    title:'Go from raw data to productionized AI in&nbsp;minutes.', 
                    description:'Machinify’s ability to automate data collection, data transformation, AI creation and product deployment shrinks the time from from product idea to AI deployed into production from 6-9 months to a matter of minutes.&nbsp;Really.', 
                    image:'bg-image1',
                    theme: 'dark',
                    layout: 'left'
                },
                {
                    id: 'home_article_4',
                    title:'Unleash AI across your&nbsp;company.', 
                    description:'Machinify makes AI accessible to domain experts and analysts in all parts of your organization.  Collaboration and change management tools enable your entire enterprise to benefit from each team’s insights and&nbsp;advances.', 
                    image:'bg-image2',
                    theme: 'dark',
                    layout: 'right'
                },
                {
                    id: 'home_article_5',
                    title:'AI built for you, controlled by&nbsp;you.', 
                    description:'Create lasting competitive advantage by unlocking the value in your own proprietary data.  Our partnership model gives you full control of mission critical products and&nbsp;processes.', 
                    image:'bg-image3',
                    theme: 'dark',
                    layout: 'left'
                },
                {
                    id: 'home_article_6',
                    title:'Immediate ROI',
                    description:'Avoid expensive and time-consuming startup efforts. Machinify enables to you deploy AI-driven products quickly and start generating ROI right away.', 
                    image:'bg-image4',
                    theme: 'dark',
                    layout: 'right'
                },
                {
                    id: 'home_article_7',
                    group: null,
                    title: 'The Machinify System',
                    description: 'We’ve integrated the power of intelligent automation, intuitive controls and cluster computing into a complete system comprised of three elements:',
                    image: null,
                    theme: 'light',
                    layout: 'title'
                },
                {
                    id: 'home_article_8',
                    group:'AI Cloud',
                    title:'Adaptive data infra built specifically for AI.',
                    description:'The first data cloud built specifically for the rigors developing AI models, the Machinify AI Cloud accepts and efficiently stores all common data types with zero&nbsp;configuration.',
                    image:'bg-image1',
                    theme: 'light',
                    layout: 'left'
                },
                {
                    id: 'home_article_9',
                    group:'AI Studio',
                    title:'Build models with zero scripting or coding.',
                    description:'Create all data transformations, build AI models by creating formulas in an intuitive user interface.  Tedious scripting is a thing of the&nbsp;past.',
                    image:'bg-image2',
                    theme: 'light',
                    layout: 'right'
                },
                {
                    id: 'home_article_10',
                    group: 'AI Runtime',
                    title: 'Deploy to production in an instant',
                    description: 'With a single click, Machinify automatically generates a production version of your AI model. Our simple yet powerful API efficiently returns predictions in&nbsp;milliseconds.',
                    image: 'bg-image3',
                    theme: 'light',
                    layout: 'left'
                },
                {
                    id: 'home_article_11',
                    group: null,
                    title: 'Learn More',
                    description: null,
                    link:'/company',
                    image: null,
                    theme: 'light',
                    layout: 'button'
                },
                {
                    id: 'home_article_12',
                    group: null,
                    title: 'Our Team',
                    description: 'From the outset, we’ve sought to build Machinify into a customer-first company that solves real problems and delivers real results.  Each member of our team reflects that commitment. We’ve brought together leaders in the fields of software development, machine learning, data science and business.',
                    image: null,
                    theme: 'grey',
                    layout: 'title'
                },
                {
                    id: 'home_article_13',
                    group: null,
                    title: 'Meet The Company Team',
                    description: null,
                    link:'/company',
                    image: null,
                    theme: 'grey',
                    layout: 'button'
                }
            ]
        },
        media: {
            title: 'We Simplify Operations',
            description: 'Through Innovations in __________________',
            articles:[
                {
                    id: 'media_article_1',
                    group: 'event',
                    title: 'This is a long title for a short announcement style article. This title may be as long as this example tigle.',
                    description: null,
                    link:'/company',
                    image: 'img-article-1a',
                    theme: 'dark',
                    layout: 'tile',
                    content: {
                        title: "The Title of The Article Goes Here",
                        date:"2018-02-14",
                        location:{
                            city: "City",
                            state: "State"
                        },
                        sections:[
                            {
                                id: 'media_article_1_section_1',
                                title:null, // Can be left, right, or center. Default is left. Field is optional
                                paragraphs: [
                                    {
                                        id: 'media_article_1_section_1_paragraph_1',
                                        align: "left", // Can be left, right, or center. Default is left. Field is optional
                                        style: ["regular"], // Can be regular, italic, and/or bold. Default is ["regular"].
                                        test:"Sunset is the time of day when our sky meets the outer space solar winds. There are blue, pink, and purple swirls, spinning and twisting, like clouds of balloons caught in a blender. The sun moves slowly to hide behind the line of horizon, while the moon races to take its place in prominence atop the night sky. People slow to a crawl, entranced, fully forgetting the deeds that still must be done. There is a coolness, a calmness, when the sun does set.", 
                                    }, 
                                    {
                                        id: 'media_article_1_section_1_paragraph_2',
                                        align: "left", // Can be left, right, or center. Default is left. Field is optional
                                        style: ["regular"], // Can be regular, italic, and/or bold. Default is ["regular"].
                                        test:"Sunset is the time of day when our sky meets the outer space solar winds. There are blue, pink, and purple swirls, spinning and twisting, like clouds of balloons caught in a blender. The sun moves slowly to hide behind the line of horizon, while the moon races to take its place in prominence atop the night sky. People slow to a crawl, entranced, fully forgetting the deeds that still must be done. There is a coolness, a calmness, when the sun does set.", 
                                    }
                                ]
                            },
                            {
                                title:"Some Section Title",
                                paragraphs: [
                                    {
                                        id: 'media_article_1_section_1_paragraph_1',
                                        align: "left", // Can be left, right, or center. Default is left. Field is optional
                                        style: ["regular"], // Can be regular, italic, and/or bold. Default is ["regular"].
                                        test:"Sunset is the time of day when our sky meets the outer space solar winds. There are blue, pink, and purple swirls, spinning and twisting, like clouds of balloons caught in a blender. The sun moves slowly to hide behind the line of horizon, while the moon races to take its place in prominence atop the night sky. People slow to a crawl, entranced, fully forgetting the deeds that still must be done. There is a coolness, a calmness, when the sun does set.", 
                                    },
                                ]
                            }
                        ]
                    }
                },
                {
                    id: 'media_article_2',
                    group: 'announcement',
                    title: 'This is a long title for a short announcement style article. This title may be as long as this example tigle.',
                    description: null,
                    link:'/company',
                    image: 'img-article-1a',
                    theme: 'dark',
                    layout: 'tile',
                    content: {
                        title: "The Title of The Article Goes Here",
                        date:"2018-02-14",
                        location:{
                            city: "City",
                            state: "State"
                        },
                        sections:[
                            {
                                id: 'media_article_1_section_1',
                                title:null, // Can be left, right, or center. Default is left. Field is optional
                                paragraphs: [
                                    {
                                        id: 'media_article_1_section_1_paragraph_1',
                                        align: "left", // Can be left, right, or center. Default is left. Field is optional
                                        style: ["regular"], // Can be regular, italic, and/or bold. Default is ["regular"].
                                        test:"lorem ipsuim...", 
                                    }, 
                                    {
                                        id: 'media_article_1_section_1_paragraph_2',
                                        align: "left", // Can be left, right, or center. Default is left. Field is optional
                                        style: ["regular"], // Can be regular, italic, and/or bold. Default is ["regular"].
                                        test:"lorem ipsuim...", 
                                    }
                                ]
                            },
                            {
                                title:"Some Section Title",
                                paragraphs: []
                            }
                        ]
                    }
                }
            ]
        },
        about: {
            title: 'We Simplify Operations',
            description: 'Through Innovations in __________________',
            articles:[
                {
                    id: 'home_article_1',
                    group: null,
                    title: 'A That Actually Works.',
                    description: 'Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. Machinify radically simplifies and accelerates your ability to use AI to unlock the value in your data and deliver guaranteed ROI.',
                    image: null,
                    theme: 'grey',
                    layout: 'title'
                },
                {
                    id: 'home_article_2',
                    group: null,
                    title: 'Read Our Story',
                    description: null,
                    link:'/company',
                    image: null,
                    theme: 'grey',
                    layout: 'button'
                },
                {
                    id: 'home_article_3',
                    title:'Go from raw data to productionized AI in&nbsp;minutes.', 
                    description:'Machinify’s ability to automate data collection, data transformation, AI creation and product deployment shrinks the time from from product idea to AI deployed into production from 6-9 months to a matter of minutes.&nbsp;Really.', 
                    image:'bg-image1',
                    theme: 'dark',
                    layout: 'left'
                },
                {
                    id: 'home_article_4',
                    title:'Unleash AI across your&nbsp;company.', 
                    description:'Machinify makes AI accessible to domain experts and analysts in all parts of your organization.  Collaboration and change management tools enable your entire enterprise to benefit from each team’s insights and&nbsp;advances.', 
                    image:'bg-image2',
                    theme: 'dark',
                    layout: 'right'
                },
                {
                    id: 'home_article_5',
                    title:'AI built for you, controlled by&nbsp;you.', 
                    description:'Create lasting competitive advantage by unlocking the value in your own proprietary data.  Our partnership model gives you full control of mission critical products and&nbsp;processes.', 
                    image:'bg-image3',
                    theme: 'dark',
                    layout: 'left'
                },
                {
                    id: 'home_article_6',
                    title:'Immediate ROI',
                    description:'Avoid expensive and time-consuming startup efforts. Machinify enables to you deploy AI-driven products quickly and start generating ROI right away.', 
                    image:'bg-image4',
                    theme: 'dark',
                    layout: 'right'
                },
                {
                    id: 'home_article_7',
                    group: null,
                    title: 'The Machinify System',
                    description: 'We’ve integrated the power of intelligent automation, intuitive controls and cluster computing into a complete system comprised of three elements:',
                    image: null,
                    theme: 'light',
                    layout: 'title'
                },
                {
                    id: 'home_article_8',
                    group:'AI Cloud',
                    title:'Adaptive data infra built specifically for AI.',
                    description:'The first data cloud built specifically for the rigors developing AI models, the Machinify AI Cloud accepts and efficiently stores all common data types with zero&nbsp;configuration.',
                    image:'bg-image1',
                    theme: 'light',
                    layout: 'left'
                },
                {
                    id: 'home_article_9',
                    group:'AI Studio',
                    title:'Build models with zero scripting or coding.',
                    description:'Create all data transformations, build AI models by creating formulas in an intuitive user interface.  Tedious scripting is a thing of the&nbsp;past.',
                    image:'bg-image2',
                    theme: 'light',
                    layout: 'right'
                },
                {
                    id: 'home_article_10',
                    group: 'AI Runtime',
                    title: 'Deploy to production in an instant',
                    description: 'With a single click, Machinify automatically generates a production version of your AI model. Our simple yet powerful API efficiently returns predictions in&nbsp;milliseconds.',
                    image: 'bg-image3',
                    theme: 'light',
                    layout: 'left'
                },
                {
                    id: 'home_article_11',
                    group: null,
                    title: 'Learn More',
                    description: null,
                    link:'/company',
                    image: null,
                    theme: 'light',
                    layout: 'button'
                },
                {
                    id: 'home_article_12',
                    group: null,
                    title: 'Our Team',
                    description: 'From the outset, we’ve sought to build Machinify into a customer-first company that solves real problems and delivers real results.  Each member of our team reflects that commitment. We’ve brought together leaders in the fields of software development, machine learning, data science and business.',
                    image: null,
                    theme: 'grey',
                    layout: 'title'
                },
                {
                    id: 'home_article_13',
                    group: null,
                    title: 'Meet The Company Team',
                    description: null,
                    link:'/company',
                    image: null,
                    theme: 'grey',
                    layout: 'button'
                }
            ]
        }
    },
    outputs:[
        {name:'currentDate', label:'Mon Jul 16 2018', fill:'53.9726%'},
        {name:'mouseX', label:'mx 870', fill:'43.9726%'},
        {name:'mouseY', label:'my 481', fill:'3.9726%'},
        {name:'mouseXVelocity', label:'mxv 0', fill:'70 .9726%'},
        {name:'mouseYVelocity', label:'myv 4', fill:'0.9726%'},
        {name:'cycles', label:'cycles 240370', fill:'93.9726%'},
      ],
    footer:{
        address: '165 University Avenue, Palo Alto, CA 94301',
        email:'info@company.com'
    }
}

export default data;