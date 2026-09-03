import express from 'express'
const app=express()

app.get('/',(req,res)=>
{
    res.status(200).json({
        message:'Hello World!'
    })
})
app.get('/api/data',(req,res)=>
{
    const data={
        id:1,
        name:'Docker Compose',
        desc:'Testing phase'
    }

    res.status(200).json(data)
})
app.get('/api/register',(req,res)=>
{
    res.status(200).json({
        message:'User registered successfully'
    })
})
app.get('/api/login',(req,res)=>
{
    res.status(200).json({
        message:'Welcome back to your account'
    })
})

export default app;