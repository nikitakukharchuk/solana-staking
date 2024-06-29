export interface Messages {
    en: MessagesStructure;
    ru: MessagesStructure;
}


export interface MessagesStructure {
    layout: {
        header: {
            home: string;
            about_us: string;
            services: string;
            contact_btn: string;
        };
        footer: {
            description: string;
        };
        alert: {
            message: string;
        };
        contact_form: {
            name: string;
            email: string;
            message: string;
            send_message: string;
        };
    };
    home: {
        hero: {
            hero_title: string;
            hero_subtitle: string;
        };
    };
    about_us: {
        title: string;
        subtitle: string;
        our_team_title: string;
        our_team_subtitle: string;
        our_team: {
            team_member_1: {
                name: string;
                description: string;
            };
            team_member_2: {
                name: string;
                description: string;
            };
            team_member_3: {
                name: string;
                description: string;
            };
            team_member_4: {
                name: string;
                description: string;
            };
        };
        our_mission_title: string;
        our_mission_subtitle: string;
    };
    services: {
        title: string;
        subtitle: string;
        sol_staking_title: string;
        sol_staking_subtitle: string;
        sol_staking: {
            sol_staking_1: {
                name: string;
                description: string;
            };
            sol_staking_2: {
                name: string;
                description: string;
            };
            sol_staking_3: {
                name: string;
                description: string;
            };
            sol_staking_4: {
                name: string;
                description: string;
            };
        };
        join_us_title: string;
        contact_title: string;
    };
}


