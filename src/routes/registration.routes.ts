import { Router, Request, Response } from "express";
import { Registrations } from "../entities/registration.entity";
import { dataSource } from "../app.data";
import { registration, validation } from "../utilities/validation.utility";
import { canCount, canCreate, canDelete, canDeleteAll, canRead, canSearch, canUpdate } from "../controllers/data.controller";

let registrationRepo = dataSource.getRepository(Registrations)

class RegistrationRoute {
    constructor(app: Router) {
        app.route('/registration')
            .post(registration, validation, this.create)
            .get(this.read)
            .put(this.update)
            .delete(this.delete)
        app.get('/search-registration', this.search)
        app.post('/delete-all-data-registration', this.deleteAll)
        app.get('/count-data-registration', this.countData)
        app.route('hallo').get(this.hallo)
    }

    hallo(req: Request, res: Response){
        res.send('hallo registration')
    }

    create(req: Request, res: Response) {
        const data = req.body;
        canCreate(data, res, registrationRepo, 'User created')
    }

    read(req: Request, res: Response) {
        const param = {
            offset: req.query.offset,
            limit: req.query.limit
        }
        canRead(param, res, registrationRepo)
    }

    update(req: Request, res: Response) {
        console.log(req.body);
        const {id, name, email, alamat} = req.body
        canUpdate(id, {id, name, email, alamat}, res, registrationRepo)
    }

    delete(req: Request, res: Response) {
        canDelete(req.body, res, registrationRepo)
    }

    deleteAll(req: Request, res: Response) {
        canDeleteAll(res, registrationRepo)
    }

    search(req: Request, res: Response) {
        const param = {
            like: req.query.like
        }

        const option = '(name, email, alamat)'
        canSearch(option, param.like?.toString(), res, registrationRepo)
    }

    countData(req: Request, res: Response) {
        canCount(res, registrationRepo)
    }
}

export default RegistrationRoute;