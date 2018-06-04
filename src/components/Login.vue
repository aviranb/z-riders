<template>
    <div class="container">
        <div>
                <input type="text" placeholder="name" />
        </div>
        <div>
                <input type="text" placeholder="id" />
        </div>
    </div>
</template>
<style scoped>
.container{
    flex: 1;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column
}

input{
    height: 30px;
    margin: 10px;
    min-width: 200px;
}
</style>
/* eslint-disable */