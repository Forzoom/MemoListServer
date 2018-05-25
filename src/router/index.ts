import * as Router from 'koa-router';
const router = new Router();

router.get('/test', function(ctx, next) {
    ctx.type = 'application/json';
    ctx.body = JSON.stringify({
        status: 0,
        message: 'OK',
        data: [

        ],
    });
});

export default router;