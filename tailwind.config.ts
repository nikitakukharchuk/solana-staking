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
            '12-18': ['12px', '18px'],
            '18-28': ['18px', '28px'],
        }
    }
}
