import { Router } from "express";
import RegistrationRoute from "./routes/registration.routes";
import CategoryRoute from "./routes/category.routes";
import CandidateRoute from "./routes/candidate.routes";
import UserRoute from "./routes/user.routes";

class AppRouter{
    constructor(app: Router){
        new RegistrationRoute(app)
        new CategoryRoute(app)
        new CandidateRoute(app)
        new UserRoute(app);
    }
}

export default AppRouter;