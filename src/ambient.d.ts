declare global {
    type ImageModel = {
        url: string
        id: string
        handle: string
        width: number
        height: number
    }

    type HomePageModel = {
        homePages: [{
            headline: string,
            description: string,
            buttons: [{
                displayText: string,
                destination: string,
                important: boolean
            }],
            backgroundVideo: string
        }]
    }
}
export {};