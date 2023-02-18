if ('theme' in localStorage) {
    switch (localStorage.theme) {
        case 'system':
            useSystemTheme()
            break
        case 'dark':
            document.documentElement.classList.add('dark')
            localStorage.realTheme = 'dark'
            break
        case 'light':
            document.documentElement.classList.remove('dark')
            localStorage.realTheme = 'light'
            break

    }
} else {
    useSystemTheme()
}

function useSystemTheme() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark')
        localStorage.realTheme = 'dark'
    } else {
        document.documentElement.classList.remove('dark')
        localStorage.realTheme = 'light'
    }
}
