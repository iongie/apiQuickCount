import { Router, Request, Response } from "express";
import { Candidate } from "../entities/candidate.entity";
import { dataSource } from "../app.data";
import { candidate, validation } from "../utilities/validation.utility";
import { canCount, canCreate, canDelete, canDeleteAll, canRead, canSearch, canUpdate } from "../controllers/data.controller";

let candidateRepo = dataSource.getRepository(Candidate)

class CandidateRoute {
    constructor(app: Router) {
        app.route('/candidate')
            .post(candidate, validation, this.create)
            .get(this.read)
            .put(candidate, validation, this.update)
            .delete(this.delete)
        app.get('/search-candidate', this.search)
        app.post('/delete-all-data-candidate', this.deleteAll)
        app.get('/count-data-candidate', this.countData)
    }

    create(req: Request, res: Response) {
        const data = req.body;
        canCreate(data, res, candidateRepo, 'Candidate created')
    }

    read(req: Request, res: Response) {
        const param = {
            offset: req.query.offset,
            limit: req.query.limit
        }
        canRead(param, res, candidateRepo)
    }

    update(req: Request, res: Response) {
        console.log(req.body);
        const {id, city, countElecVote, gender, name, noUrut, photo, province, dapil, logoParties, nameParties, actionPolling, loading} = req.body
        canUpdate(id, {id, city, countElecVote, gender, name, noUrut, photo, province, dapil, logoParties, nameParties, actionPolling, loading}, res, candidateRepo)
    }

    delete(req: Request, res: Response) {
        canDelete(req.body, res, candidateRepo)
    }

    deleteAll(req: Request, res: Response) {
        canDeleteAll(res, candidateRepo)
    }

    search(req: Request, res: Response) {
        const param = {
            like: req.query.like
        }

        const option = '(name, gender, city, noUrut, dapil, province, nameParties)'
        canSearch(option, param.like?.toString(), res, candidateRepo)
    }

    countData(req: Request, res: Response) {
        canCount(res, candidateRepo)
    }
}

export default CandidateRoute;