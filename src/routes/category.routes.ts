import { Router, Request, Response } from "express";
import { Category } from "../entities/category.entity";
import { dataSource } from "../app.data";
import { category, validation } from "../utilities/validation.utility";
import { canCount, canCreate, canDelete, canDeleteAll, canRead, canSearch, canUpdate } from "../controllers/data.controller";

let categoryRepo = dataSource.getRepository(Category)

class CategoryRoute {
    constructor(app: Router) {
        app.route('/category')
            .post(category, validation, this.create)
            .get(this.read)
            .put(this.update)
            .delete(this.delete)
        app.get('/search-category', this.search)
        app.post('/delete-all-data-category', this.deleteAll)
        app.get('/count-data-category', this.countData)
    }

    create(req: Request, res: Response) {
        const data = req.body;
        canCreate(data, res, categoryRepo, 'Category created')
    }

    read(req: Request, res: Response) {
        const param = {
            offset: req.query.offset,
            limit: req.query.limit
        }
        canRead(param, res, categoryRepo)
    }

    update(req: Request, res: Response) {
        const {id, name, page, detail, nameCode} = req.body
        canUpdate(id, {id, name, page, detail, nameCode}, res, categoryRepo)
    }

    delete(req: Request, res: Response) {
        canDelete(req.body, res, categoryRepo)
    }

    deleteAll(req: Request, res: Response) {
        canDeleteAll(res, categoryRepo)
    }

    search(req: Request, res: Response) {
        const param = {
            like: req.query.like
        }

        const option = '(name)'
        canSearch(option, param.like?.toString(), res, categoryRepo)
    }

    countData(req: Request, res: Response) {
        canCount(res, categoryRepo)
    }
}

export default CategoryRoute;