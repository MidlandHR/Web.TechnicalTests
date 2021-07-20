export interface Post {
    id: string,
    tags: Tag[],
    text: string,
    title: string,
    votes: Vote,
}

export interface Tag {
    is: string,
    name: string
}

export interface Vote {
    up: number,
    down: number
}