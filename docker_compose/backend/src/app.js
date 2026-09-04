import express from 'express';
const app=express()

app.get('/',(req,res)=>
{
    res.status(200).json({
        message:'Welcome'
    })
})
app.get('/api/health',(req,res)=>
{
    res.status(200).json({
        status:'OK'
    })
})
app.get('/api/users',(req,res)=>
{
    const users=[
        {id:1,name:'Alice'},
        {id:2,name:'Bob'},
        {id:3,name:'Charlie'},
        {id:4,name:'David'},
        {id:5,name:'Emily'},
    ]
    res.status(200).json(users)
})

export default app;