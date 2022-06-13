import express from 'express';


// convenience function to return the DisplayName of the User

export function UserDisplayName(req: Express.Request): string
{
    if(req.user)
    {
        let user =req.user as UserDocument
        return user.DisplayName.toString();
    }
    return '';
}

//helper function for guarding secure locations

export function AuthGuar(req: express.Request, res: express.Response, next: express.NextFunction)
{
    if(!req.isAuthenticated)
    {
        return res.redirect('/login');
    }
    next();
}