import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                primary: colors.green
            }
        },
        fontSize: {
            '80-80-h1-lg': ['80px', {
                lineHeight: '5rem',
                letterSpacing: '-0.01em',
                fontWeight: '600',
            }],
            '40-48-h1': ['40px', {
                lineHeight: '3rem',
                letterSpacing: '-0.01em',
                fontWeight: '600',
            }],
            '50-50-h2-lg': ['50px', {
                lineHeight: '3rem',
                letterSpacing: '-0.01em',
                fontWeight: '600',
            }],
            '30-30-h2': ['30px', {
                lineHeight: '1.5rem',
                letterSpacing: '-0.01em',
                fontWeight: '600',
            }],
            '30-30-h3-lg': ['30px', {
                lineHeight: '1.5rem',
                letterSpacing: '-0.01em',
                fontWeight: '600',
            }],
            '20-20-h3': ['20px', {
                lineHeight: '1rem',
                letterSpacing: '-0.01em',
                fontWeight: '600',
            }],
            '14-20': ['14px', '20px'],
            '18-28': ['18px', '28px'],
            '12-18': ['12px', '18px'],
        },
        container: {
            padding: '2rem',
        },
    }
}
