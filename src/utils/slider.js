const data = [
    {
        title:'Cereals',
        description:'We deal with cereals such as Rice,beans and french beans',
        image:'/images/rice.webp',
        action:'Explore cereals',
        url:'cereals'
    },
    {
        title:'Fruits',
        description:'We deal with fruits such as tomatoes,mangoes and avocados',
        image:'/images/tomatoes.webp',
        action:'EXplore fruits',
        url:'fruits'
    },
    {
        title:'Vegetables',
        description:'We deal with vegetables such as kales,cabbages and spinach',
        image:'/images/spinach.webp',
        action:'Explore vegetables',
        url:'vegetables'
    },
    {
        title:'Tubers',
        description:'We deal with tubers such as potato,arrow roots and cassava',
        image:'/images/cassava.webp',
        action:'Explore tubers',
        url:'tubers'
    }
];

const settings = {
    dots:true,
    arrows:false,
    autoplay:true,
    autoplaySpeed:5000,
    infinite:true,
    speed:500,
    slidesToShow:1,
    slidesToScroll:1,
    pauseOnDotsHover:true,
    pauseOnHover:true,
    pauseOnFocus:true
};

export {data,settings};