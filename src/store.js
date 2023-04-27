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

});