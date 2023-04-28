import { reactive } from 'vue';

export const store = reactive({

    headerMenu: [
        // homeLinks array
        {
            name: 'Home',
            items: [
                'MaxCoach Education',
                'Course Portal',
                'Distant Learning',
                'Multimedia Pedagogy',
                'Modern Schooling',
                'Remote Training',
                'Health Coaching',
                'Gym Coaching',
                'Business',
                'Artist'
            ]
        },
        // pagine array
        {
            name: 'Pages',
            items: [
                'Start Here',
                'Success Story',
                'About me',
                'About us 01',
                'About us 02',
                'About us 03',
                'Contact me',
                'Contacts us',
                'Purchase Guide',
                'Privacy Policy',
                'Terms of Service'
            ]
        },
        // corsi array
        {
            name: 'Courses',
            items: [
                'Courses Grid 01',
                'Courses Grid 02',
                'Courses Grid 03',
                'Membership Levels',
                'Become a teacher',
                'Profile',
                'Checkout',
                {
                    name: 'Single Layout',
                    items: [
                        'Free Course',
                        'Sticky Features Bar',
                        'Standard Sidebar',
                        'No Sidebar'
                    ]
                },
            ]
        },
        // corsi pt 2 array

        // features array
        {
            name: 'Features',
            items: [
                'Event',
                'Zoom meetings'
            ]
        },
        // blog array
        {
            name: 'Blog',
            items: [
                'Blog Grid',
                'Blog Masonry',
                'Blog Classic',
                'Blog List'
            ]
        },
        // shop array
        {
            name: 'Shop',
            items: [
                'Shop Left Sidebar',
                'Shop Right Sidebar',
                'Cart',
                'Wishlist',
                'Single Product'
            ]
        }
    ],
    title: 'Distant learning for further expansion',
    subtitle: 'Learning is a life-long journey that in fact we never find the terminate stop. Stop searching, enjoy the process.',
    btninfo: 'Download free guide',

    cardInfo: [
        {
            price: '40',
            imgs: 'course-02-480x298.jpg',
            infocourse: 'Learning to write as a prefessional author',
            lessons: '20',
            studends: '50',
            id: '01'
        },
        {
            price: 'Free',
            imgs: 'stock-full-hd-03-480x298.jpg',
            infocourse: 'Customer-centric-info-tech',
            lessons: '24',
            studends: '769',
            id: '02'
        },
        {
            price: '19',
            imgs: 'stock-full-hd-04-480x298.jpg',
            infocourse: 'Open programming Courses for Everyone: Python',
            lessons: '17',
            studends: '62',
            id: '03'
        },
        {
            price: '26',
            imgs: 'stock-full-hd-06-480x298.jpg',
            infocourse: 'Academic Listening and Note-taking',
            lessons: '14',
            studends: '67',
            id: '04'
        },
        {
            price: '39',
            imgs: 'course-featured-image-01-480x298.jpg',
            infocourse: 'Master jQuery is a short Period of Time',
            lessons: '6',
            studends: '51',
            id: '05'
        },
        {
            price: '59',
            imgs: 'stock-full-hd-05-480x298.jpg',
            infocourse: 'Introduction to javascript for beginners',
            lessons: '14',
            studends: '76',
            id: '06'
        },
    ],

    smartTutoring: [
        {
            name: 'Customize Preferences',
            img: 'home-2-image-box-01.png',
            infographic: 'Learners are given the right to arrange and customize their study schedule and timetable based on preferences.',
            btninfo: 'Start Here ->'
        },
        {
            name: 'Cloud Storage',
            img: 'about-us-02-image-box-02.png',
            infographic: 'You can store online lessons via online cloud or download to your device and revise lessons on the way.',
            btninfo: 'Get Free Quote ->'
        },
        {
            name: 'Multimedia Channels',
            img: 'home-2-image-box-03.png',
            infographic: 'We provide study materials with various formats: video, audio, slides, doc, prints, books and applications.',
            btninfo: 'Start Now ->'
        },


    ],

    learners: [
        {
            title: 'High level of efficiency and scientific teaching methods',
            paragraph: 'I am free to learn at my own place, follow my own schedule and choos the subject i want to learn from the syllabus. Great study portal for people like me.',
            name: 'Mina Hollace',
            occupation: 'Freelancer',
            id: '1',
            profileimg: 'testimonial-avata-02.jpg',
        },
        {
            title: 'Professional team of specialists and passionate mentors at reach',
            paragraph: 'I need to get a certification in English proficiency and MaxCoach is my best choise. Their tutors are smart and professional when dealing whit students.',
            name: 'Madley pondor',
            occupation: 'IT Specialist',
            id: '2',
            profileimg: 'testimonial-avata-04.jpg',
        },
        {
            title: 'The MaxCoach team works really hard to ensure high quality',
            paragraph: 'I am happy whit their arrangement of lessons and subjects. They reflect a scientific investigation into effective methods to be adopted for learners of all levels.',
            name: 'Luvic Dubble',
            occupation: 'Private Tutor',
            id: '3',
            profileimg: 'testimonial-avata-01.jpg',
        },
        {
            title: 'It\'s a choise of quality for people with special needs',
            paragraph: 'I am a very strict person so i require everything to be organized and neat. Then, i\'ll be able to make things right and shine. MaxCoach guy just got me.',
            name: 'Florence Themes',
            occupation: 'Multimedia Admin',
            id: '4',
            profileimg: 'testimonial-avata-03.jpg',
        },

    ]
});