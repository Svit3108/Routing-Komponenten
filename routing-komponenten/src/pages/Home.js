import React from 'react';
const sections = [
    { id: 1, headline: 'Headline', subheadline: 'Subheadline', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eveniet minima ullam quia vero facere hic deserunt corrupti laboriosam, iusto libero molestias quidem quas a veritatis incidunt id praesentium quos.' },
    { id: 2, headline: 'Headline', subheadline: 'Subheadline', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eveniet minima ullam quia vero facere hic deserunt corrupti laboriosam, iusto libero molestias quidem quas a veritatis incidunt id praesentium quos.' },
    { id: 3, headline: 'Headline', subheadline: 'Subheadline', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eveniet minima ullam quia vero facere hic deserunt corrupti laboriosam, iusto libero molestias quidem quas a veritatis incidunt id praesentium quos.' },
    { id: 4, headline: 'Headline', subheadline: 'Subheadline', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eveniet minima ullam quia vero facere hic deserunt corrupti laboriosam, iusto libero molestias quidem quas a veritatis incidunt id praesentium quos.' },
    { id: 5, headline: 'Headline', subheadline: 'Subheadline', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eveniet minima ullam quia vero facere hic deserunt corrupti laboriosam, iusto libero molestias quidem quas a veritatis incidunt id praesentium quos.' },
    { id: 6, headline: 'Headline', subheadline: 'Subheadline', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eveniet minima ullam quia vero facere hic deserunt corrupti laboriosam, iusto libero molestias quidem quas a veritatis incidunt id praesentium quos.' },
    { id: 7, headline: 'Headline', subheadline: 'Subheadline', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eveniet minima ullam quia vero facere hic deserunt corrupti laboriosam, iusto libero molestias quidem quas a veritatis incidunt id praesentium quos.' },
    { id: 8, headline: 'Headline', subheadline: 'Subheadline', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eveniet minima ullam quia vero facere hic deserunt corrupti laboriosam, iusto libero molestias quidem quas a veritatis incidunt id praesentium quos.' },
    { id: 9, headline: 'Headline', subheadline: 'Subheadline', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eveniet minima ullam quia vero facere hic deserunt corrupti laboriosam, iusto libero molestias quidem quas a veritatis incidunt id praesentium quos.' },
    { id: 10, headline: 'Headline', subheadline: 'Subheadline', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eveniet minima ullam quia vero facere hic deserunt corrupti laboriosam, iusto libero molestias quidem quas a veritatis incidunt id praesentium quos.' },
    { id: 11, headline: 'Headline', subheadline: 'Subheadline', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eveniet minima ullam quia vero facere hic deserunt corrupti laboriosam, iusto libero molestias quidem quas a veritatis incidunt id praesentium quos.' },
    { id: 12, headline: 'Headline', subheadline: 'Subheadline', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eveniet minima ullam quia vero facere hic deserunt corrupti laboriosam, iusto libero molestias quidem quas a veritatis incidunt id praesentium quos.' },
];
const Home = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
            {sections.map(section => (
                <section key={section.id}>
                    <div className="hover:bg-gray-200 border border-gray-300 p-2 rounded-lg shadow-lg">
                        <h1 className="text-xl">{section.headline}</h1>
                        <h3 className="text-lg">{section.subheadline}</h3>
                        <p className="text-xs line-clamp-3 overflow-auto">{section.content}</p>
                    </div>
                </section>
            ))}
        </div>
    );
};
export default Home;