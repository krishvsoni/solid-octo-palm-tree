
export function initMiddleware(app) {
    app.use('/api/v1/blog/*', async (c: { req: { header: (arg0: string) => string; }; env: { JWT_SECRET: any; }; status: (arg0: number) => void; json: (arg0: { error: string; }) => any; }, next: () => void) => {
        const header = c.req.header("authorization") || "";
        // Bearer token => ["Bearer", "token"];
        const token = header.split(" ")[1]
        
        // @ts-ignore
        const response = await verify(token, c.env.JWT_SECRET)
        if (response.id) {
          next()
        } else {
          c.status(403)
          return c.json({ error: "unauthorized" })
        }
      })
      
}