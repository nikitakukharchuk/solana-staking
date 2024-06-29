

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: {
            layout: {
                header: {
                 home: 'Home',
                 about_us: 'About Us',
                 services: 'Services',
                 contact_btn: 'Contact us',
                },
                footer: {
                    description: 'Start your journey into the Solana ecosystem !'
                },
                alert: {
                    message: 'Сообщение успешно отправлено !'
                },
                contact_form: {
                    name : 'Name',
                    email: 'Email',
                    message : 'Message',
                    send_message: 'Send message'
                }
            },
            home: {
                hero:{
                    hero_title: 'The motherboard aggregator',
                    hero_subtitle: 'Transforming the Solana experience, our ultimate onboarding platform simplifies, secures, and enriches your journey into the Solana ecosystem, ensuring accessibility and enjoyment every step of the way.',
                },
            },
            about_us: {
                title: 'About Us',
                subtitle: 'Welcome to our website dedicated to providing staking services for SOL cryptocurrency! We are a team of blockchain technology and cryptocurrency enthusiasts, striving to make staking accessible and profitable for everyone.',
                our_team_title: 'Our team',
                our_team_subtitle: 'Our team consists of experienced professionals in blockchain technology, programming, finance, and marketing. We have combined our efforts to create a platform that is not only user-friendly and secure but also highly profitable for our users.',
                our_team: {
                    team_member_1: {
                        name: 'Alexey Ivanov',
                        description: 'Founder and CEO. Alexey has over 10 years of experience in the IT industry and 5 years in the blockchain technology field.'
                    },
                    team_member_2: {
                        name: 'Maria Petrova',
                        description: 'Chief Technology Officer. Maria is responsible for developing and implementing technological solutions, ensuring high performance and security of the platform.'
                    },
                    team_member_3: {
                        name: 'Ivan Sidorov',
                        description: 'Chief Financial Officer. Ivan manages the company’s financial operations and develops strategies aimed at maximizing our clients’ profits.'
                    },
                    team_member_4: {
                        name: 'Ekaterina Smirnova',
                        description: 'Chief Marketing Officer. Ekaterina handles the promotion of our platform, ensuring the attraction of new users and maintaining relationships with current clients.'
                    }
                },
                our_mission_title: 'Our mission',
                our_mission_subtitle: 'Our mission is to provide everyone with the opportunity to participate in SOL cryptocurrency staking with minimal effort and maximum profit. We strive to make the staking process simple, secure, and accessible to all, regardless of their knowledge and experience in the cryptocurrency sphere. Our goal is to create a community where every participant can earn a stable passive income and contribute to the development of the Solana ecosystem.',
            },
            services: {
                title: 'Services',
                subtitle: 'On our platform, we offer various staking services for SOL cryptocurrency so that everyone can find the optimal solution for themselves.',
                sol_staking_title: 'SOL Staking',
                sol_staking_subtitle: 'Staking is the process of locking up SOL cryptocurrency on our platform to support the Solana blockchain network. In return, users receive rewards in the form of new SOL coins. Our services include:',
                sol_staking: {
                    sol_staking_1: {
                        name: 'Automated Staking',
                        description: 'We handle all the technical aspects of staking so you can earn income effortlessly. All you need to do is deposit SOL on our platform.'
                    },
                    sol_staking_2: {
                        name: 'Transparent Rewards',
                        description: 'We offer competitive reward rates and a transparent profit distribution system. You will always know how much you have earned and what fees were deducted.'
                    },
                    sol_staking_3: {
                        name: 'Asset Security',
                        description: 'We use advanced security technologies to protect your funds. Our servers have a high degree of protection against hacking and DDoS attacks.'
                    },
                    sol_staking_4: {
                        name: '24/7 Support',
                        description: 'Our support team is ready to assist you at any time. If you have any questions or issues, you can always contact us for help.'
                    }
                },
                join_us_title: 'Join us and start earning with SOL cryptocurrency staking today! We provide a simple, secure, and profitable staking process for you.',
                contact_title: 'Contact Us'
            }
        },
        ru: {
            layout: {
                header: {
                    home: 'Главная',
                    about_us: 'О нас',
                    services: 'Услуги',
                    contact_btn: 'Связаться с нами',
                },
                footer: {
                    description: 'Начните своё путешествие в экосистему Solana!'
                },
                alert: {
                    message: 'Сообщение успешно отправлено!'
                },
                contact_form: {
                    name: 'Имя',
                    email: 'Электронная почта',
                    message: 'Сообщение',
                    send_message: 'Отправить сообщение'
                }
            },
            home: {
                hero: {
                    hero_title: 'Материнская плата агрегатора',
                    hero_subtitle: 'Преобразуя опыт использования Solana, наша платформа для начальной настройки упрощает, защищает и обогащает ваше путешествие в экосистему Solana, обеспечивая доступность и удовольствие на каждом этапе.',
                },
            },
            about_us: {
                title: 'О нас',
                subtitle: 'Добро пожаловать на наш сайт, посвященный предоставлению услуг стейкинга для криптовалюты SOL! Мы - команда энтузиастов блокчейн-технологий и криптовалют, стремящаяся сделать стейкинг доступным и выгодным для всех.',
                our_team_title: 'Наша команда',
                our_team_subtitle: 'Наша команда состоит из опытных профессионалов в области блокчейн-технологий, программирования, финансов и маркетинга. Мы объединили наши усилия, чтобы создать платформу, которая не только удобна и безопасна в использовании, но и приносит высокую прибыль нашим пользователям.',
                our_team: {
                    team_member_1: {
                        name: 'Алексей Иванов',
                        description: 'Основатель и генеральный директор. Алексей имеет более 10 лет опыта в ИТ-индустрии и 5 лет в области блокчейн-технологий.'
                    },
                    team_member_2: {
                        name: 'Мария Петрова',
                        description: 'Технический директор. Мария отвечает за разработку и внедрение технологических решений, обеспечивая высокую производительность и безопасность платформы.'
                    },
                    team_member_3: {
                        name: 'Иван Сидоров',
                        description: 'Финансовый директор. Иван управляет финансовыми операциями компании и разрабатывает стратегии, направленные на максимизацию прибыли наших клиентов.'
                    },
                    team_member_4: {
                        name: 'Екатерина Смирнова',
                        description: 'Директор по маркетингу. Екатерина занимается продвижением нашей платформы, обеспечивая привлечение новых пользователей и поддержание отношений с текущими клиентами.'
                    }
                },
                our_mission_title: 'Наша миссия',
                our_mission_subtitle: 'Наша миссия - предоставить каждому возможность участвовать в стейкинге криптовалюты SOL с минимальными усилиями и максимальной прибылью. Мы стремимся сделать процесс стейкинга простым, безопасным и доступным для всех, независимо от их знаний и опыта в сфере криптовалют. Наша цель - создать сообщество, где каждый участник может получать стабильный пассивный доход и способствовать развитию экосистемы Solana.',
            },
            services: {
                title: 'Услуги',
                subtitle: 'На нашей платформе мы предлагаем различные услуги по стейкингу криптовалюты SOL, чтобы каждый мог найти оптимальное решение для себя.',
                sol_staking_title: 'Стейкинг SOL',
                sol_staking_subtitle: 'Стейкинг - это процесс блокировки криптовалюты SOL на нашей платформе для поддержки работы блокчейн-сети Solana. За это пользователи получают вознаграждение в виде новых монет SOL. Наши услуги включают:',
                sol_staking: {
                    sol_staking_1: {
                        name: 'Автоматизированный стейкинг',
                        description: 'Мы берем на себя все технические аспекты стейкинга, чтобы вы могли получать доход без дополнительных усилий. Все, что вам нужно сделать - это депонировать SOL на нашей платформе.'
                    },
                    sol_staking_2: {
                        name: 'Прозрачные вознаграждения',
                        description: 'Мы предлагаем конкурентные ставки вознаграждения и прозрачную систему распределения прибыли. Вы всегда будете знать, сколько вы заработали и какие комиссии были удержаны.'
                    },
                    sol_staking_3: {
                        name: 'Безопасность активов',
                        description: 'Мы используем передовые технологии безопасности для защиты ваших средств. Наши серверы имеют высокую степень защиты от взлома и DDoS-атак.'
                    },
                    sol_staking_4: {
                        name: 'Круглосуточная поддержка',
                        description: 'Наша служба поддержки готова помочь вам в любое время суток. Если у вас возникнут вопросы или проблемы, вы всегда можете обратиться к нам за помощью.'
                    }
                },
                join_us_title: 'Присоединяйтесь к нам и начните зарабатывать на стейкинге криптовалюты SOL уже сегодня! Мы обеспечим вам простой, безопасный и выгодный процесс стейкинга.',
                contact_title: 'Свяжитесь с нами'
            }
        }
    }
}))