import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Blog } from "../entity/blog"

export class UserController {

    private userRepository = AppDataSource.getRepository(Blog)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)


        const user = await this.userRepository.findOne({
            where: { id }
        })

        if (!user) {
            return "unregistered blog"
        }
        return user
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { title, body } = request.body;

        const user = Object.assign(new Blog(), {
            title,
            body
        })

        return this.userRepository.save(user)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let userToRemove = await this.userRepository.findOneBy({ id })

        if (!userToRemove) {
            return "this blog not exist"
        }

        await this.userRepository.remove(userToRemove)

        return "blog has been removed"
    }

}