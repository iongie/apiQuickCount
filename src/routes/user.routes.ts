import { Router, Request, Response } from "express";
import { User } from "../entities/user.entity";
import { dataSource } from "../app.data";
import { user, validation } from "../utilities/validation.utility";
import { canCount, canCreate, canDelete, canDeleteAll, canRead, canSearch, canUpdate } from "../controllers/data.controller";

let userRepo = dataSource.getRepository(User)

class UserRoute {
    constructor(app: Router) {
        app.route('/user')
            .post(user, validation, this.create)
            .get(this.read)
            .put(this.update)
            .delete(this.delete)
        app.get('/search-user', this.search)
        app.post('/delete-all-data-user', this.deleteAll)
        app.get('/count-data-user', this.countData)
    }

    create(req: Request, res: Response) {
        const data = req.body;
        canCreate(data, res, userRepo, 'user created')
    }

    read(req: Request, res: Response) {
        const param = {
            offset: req.query.offset,
            limit: req.query.limit
        }
        canRead(param, res, userRepo)
    }

    update(req: Request, res: Response) {
        const {id, name, nik, email, codedpd, codedpr, codedprdprov, codedprdkabKo} = req.body
        canUpdate(id, {id, name, nik, email, codedpd, codedpr, codedprdprov, codedprdkabKo}, res, userRepo)
    }

    delete(req: Request, res: Response) {
        canDelete(req.body, res, userRepo)
    }

    deleteAll(req: Request, res: Response) {
        canDeleteAll(res, userRepo)
    }

    search(req: Request, res: Response) {
        const param = {
            like: req.query.like
        }

        const option = '(name)'
        canSearch(option, param.like?.toString(), res, userRepo)
    }

    countData(req: Request, res: Response) {
        canCount(res, userRepo)
    }
}

export default UserRoute;