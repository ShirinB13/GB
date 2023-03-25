# Select the database
USE goldbubble;

INSERT INTO users (firstname, surname, username, email, psw)
VALUES
    ('John', 'Doe', 'jdoe123', 'johndoe123@gold.ac.uk', 'P@ssword1'),
    ('Jane', 'Doe', 'jdoe456', 'janedoe456@gold.ac.uk', 'Qwerty1!'),
    ('Bob', 'Smith', 'bsmith789', 'bobsmith789@gold.ac.uk', 'Summer21'),
    ('Alice', 'Johnson', 'ajohnson789', 'alicej789@gold.ac.uk', 'Orange2#'),
    ('David', 'Lee', 'dlee456', 'davidl456@gold.ac.uk', 'H3ll0W0rld'),
    ('Emily', 'Wilson', 'ewilson123', 'emilyw123@gold.ac.uk', 'April2022'),
    ('Michael', 'Garcia', 'mgarcia789', 'michaelg789@gold.ac.uk', 'B1gM0ney'),
    ('Samantha', 'Nguyen', 'snguyen456', 'samanthan456@gold.ac.uk', 'R0s3G@rden'),
    ('William', 'Brown', 'wbrown789', 'williamb789@gold.ac.uk', 'Snowman1#'),
    ('Olivia', 'Taylor', 'otaylor123', 'oliviat123@gold.ac.uk', 'Summer21!');


# Insert test topics
INSERT INTO topics(topic_title)
VALUES
    ('Art'),
    ('Design'),
    ('English'),
    ('Music'),
    ('Theatre'),
    ('Visual Cultures'),
    ('Dance and Performance'),
    ('Languages'),
    ('Anthropology'),
    ('History'),
    ('Media'),
    ('Politics'),
    ('Sociology'),
    ('Psychology'),
    ('Education'),
    ('Business'),
    ('Management'),
    ('Law'),
    ('Computer Science'),
    ('Computing'),
    ('Geography'),
    ('Games Computing');

# Insert test posts
INSERT INTO posts (post_date, post_title, post_content, username, topic_title)
VALUES
    ('2022-01-01 12:00:00', 'The Impact of Climate Change on Global Water Resources', 'In this lecture, we discussed the impact of climate change on global water resources. Climate change is causing significant changes to the water cycle, resulting in changes to the quantity, quality, and availability of water resources around the world. We explored how rising temperatures are causing glaciers and ice caps to melt, resulting in rising sea levels, which in turn affects the availability of freshwater resources in coastal areas.

Furthermore, climate change has led to more frequent and severe droughts and floods in many regions, affecting both agricultural productivity and access to clean drinking water. We discussed how these changes are particularly affecting vulnerable communities in developing countries, where access to water resources is already limited.

To mitigate the impact of climate change on water resources, we need to take a multi-faceted approach that includes reducing greenhouse gas emissions, implementing water conservation measures, and improving water management practices. This requires collaboration between governments, NGOs, and communities around the world.

In conclusion, the impact of climate change on water resources is a critical issue that requires urgent action. We need to prioritize sustainable and equitable management of water resources to ensure that future generations have access to safe and reliable water supplies.
', 'jdoe123', 'Geography'),
    ('2022-01-02 14:30:00', 'The Causes and Consequences of the Industrial Revolution', 'In this lecture, we examined the causes and consequences of the Industrial Revolution that occurred in Britain in the late 18th and early 19th centuries. We discussed how the invention of new machines, such as the spinning jenny and power loom, revolutionized the textile industry and spurred the growth of other industries, including coal mining, iron production, and transportation.

We also discussed the social and economic consequences of the Industrial Revolution, including the emergence of the working class, the growth of urbanization, and the widening gap between the rich and poor. We examined how these changes laid the foundation for modern capitalism and shaped the world we live in today.

The lecture was important because it helped us understand how the Industrial Revolution transformed the world and shaped modern society. The innovations that emerged during this time period revolutionized manufacturing and production, and led to massive changes in transportation, communication, and agriculture. The lecture also highlighted the human cost of these changes, including the harsh working conditions and poor living standards experienced by the working class.

Overall, the Industrial Revolution was a pivotal moment in world history, and understanding its causes and consequences is crucial to understanding the world we live in today
', 'bsmith789', 'History'),
    ('2022-01-03 10:00:00', 'The effects of Childhood Trauma on Adult Mental Health', 'In this lecture, we explored the effects of childhood trauma on adult mental health. Childhood trauma refers to experiences that are emotionally or physically distressing, such as abuse, neglect, or the death of a parent. We discussed how these experiences can have lasting effects on individual mental health and well-being, even into adulthood.

We examined the different types of childhood trauma, including physical, sexual, and emotional abuse, as well as neglect and exposure to violence. We also discussed how childhood trauma can lead to the development of mental health disorders, such as depression, anxiety, and post-traumatic stress disorder (PTSD).

Furthermore, we discussed the importance of early intervention and treatment for individuals who have experienced childhood trauma. We explored evidence-based treatments, such as cognitive-behavioral therapy (CBT) and eye movement desensitization and reprocessing (EMDR), as well as the role of medication in treating mental health disorders.

The lecture was important because childhood trauma is a significant public health issue that affects millions of individuals worldwide. Understanding the impact of childhood trauma on mental health is crucial for healthcare providers, policymakers, and society as a whole, as it can inform the development of interventions and policies aimed at preventing and treating childhood trauma and its long-term effects.
', 'dlee456', 'Psychology'),
    ('2023-03-18 11:30:00', 'The Evolution of Abstract Art', 'In this lecture, we examined the evolution of abstract art and its impact on the art world. Abstract art is characterized by the use of non-representational forms, shapes, colours, and lines to create visual compositions that evoke emotions and ideas rather than depict recognizable objects.

We discussed the origins of abstract art in the early 20th century, with artists such as Wassily Kandinsky and Kazimir Malevich pioneering the movement. We explored the various styles and movements within abstract art, such as cubism, expressionism, and minimalism, and how they have evolved over time.

We also discussed the impact of abstract art on the art world and on society as a whole. Abstract art has challenged traditional notions of art, including the idea that art must depict recognizable objects, and has opened up new possibilities for artistic expression and experimentation. It has also influenced other fields, such as design, architecture, and fashion.

The lecture was important because abstract art has had a significant impact on the art world and on society, and understanding its evolution and impact is crucial for anyone interested in art and culture. The lecture also highlighted the importance of artistic expression and experimentation, and how art can challenge and change our perspectives and ideas.
', 'jdoe123', 'Art'),
    ('2023-03-19 09:45:00', 'The Power and Influence of Social Media', 'In this lecture, we discussed the power and influence of social media in todays society. Social media platforms, such as Facebook, Twitter, and Instagram, have revolutionized the way people communicate and interact with each other, as well as how they consume and share information.

We examined how social media has transformed traditional media, such as television and print, and has enabled anyone with an internet connection to create and share content. We also discussed how social media has facilitated the spread of information and ideas, and how it has influenced public opinion and political discourse.

Furthermore, we explored the negative effects of social media, including the spread of fake news and disinformation, the proliferation of hate speech and cyberbullying, and the impact of social media on mental health and well-being.

The lecture was important because social media is a powerful tool that has transformed the way we communicate, consume information, and engage with the world around us. It has also raised important ethical and social issues that require thoughtful consideration and regulation. Understanding the power and influence of social media is crucial for anyone interested in media, communication, or technology, as well as for policymakers and society as a whole.
', 'ajohnson789', 'Media'),
    ('2023-03-19 14:15:00', 'The Importance of Corporate Social Responsibility (CSR)', 'In this lecture, we discussed the importance of corporate social responsibility (CSR) in todays business world. CSR refers to a companys responsibility to operate in a way that considers the impact of its actions on society, the environment, and the economy.

We explored the different aspects of CSR, including ethical behavior, sustainability, and community involvement. We also discussed how CSR can benefit companies by improving their reputation, increasing employee engagement and retention, and enhancing customer loyalty.

Furthermore, we examined the challenges and barriers to implementing CSR, such as cost considerations, lack of accountability, and conflicting priorities.

The lecture was important because CSR has become increasingly important to consumers and stakeholders, who expect companies to act in a socially and environmentally responsible manner. Understanding the importance of CSR is crucial for business leaders and managers, as it can inform their decision-making and strategic planning. Additionally, the lecture highlighted the potential benefits of CSR, both for companies and for society as a whole, and emphasized the importance of balancing social responsibility with economic viability.
', 'ewilson123', 'Business'),
    ('2023-03-20 10:30:00', 'The Role of Precedent in Common Law Jurisdictions', 'In this lecture, we explored the role of precedent in common law jurisdictions, such as the United States and the United Kingdom. Precedent refers to the legal principle that past court decisions should be followed in similar cases, creating a system of legal consistency and predictability.

We discussed the different types of precedent, including binding and persuasive precedent, and how they are used in legal decision-making. We also examined the importance of the hierarchy of courts in the development of precedent, with higher courts establishing binding precedent that lower courts must follow.

Furthermore, we examined the limitations and criticisms of the use of precedent in common law jurisdictions, such as the potential for rigidity and inflexibility in the law, and the potential for outdated or unjust precedents to be followed.

The lecture was important because the use of precedent is a fundamental aspect of common law jurisprudence, and understanding its role and limitations is crucial for anyone studying or practicing law in a common law jurisdiction. Additionally, the lecture highlighted the ongoing debate over the use of precedent in the law, and emphasized the importance of balancing the need for consistency and predictability with the need for legal flexibility and justice.
', 'dlee456', 'Law'),
    ('2023-03-20 15:45:00', 'Exploring Musical Traditions: From Baroque to Contemporary', 'In this music seminar, we explored the evolution of Western classical music from the Baroque period to contemporary times. We discussed the key characteristics and composers of each era, and examined how they reflected the broader cultural and social contexts of their time.

We began by discussing the Baroque period, with its elaborate ornamentation, use of counterpoint, and the emergence of opera. We then moved on to the Classical period, with its emphasis on simplicity and clarity, and the emergence of the symphony and the sonata form. We discussed the Romantic period, with its emphasis on emotional expression and individualism, and the emergence of program music and virtuosity. Finally, we examined contemporary classical music, with its wide range of styles and influences, including minimalism, experimental music, and cross-cultural fusion.

Throughout the seminar, we also discussed the ways in which musical traditions are passed down and preserved, and how they continue to evolve and adapt over time.

The seminar was important because it provided a comprehensive overview of Western classical music, its evolution, and its relationship to broader cultural and social contexts. It also emphasized the importance of exploring and preserving musical traditions, and how they can continue to inspire and influence contemporary music.
', 'mgarcia789', 'Music');
