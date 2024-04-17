<template>
    <header class="bg-black p-3 d-flex justify-content-between ">
        <h1 class="text-danger fw-semibold ">Boolflix</h1>
        <div class="input-group w-25">
            <input type="text" class="form-control" placeholder="Cerca titolo Film o Serie TV" aria-label="Recipient's username"
                aria-describedby="button-addon2">
            <button class="btn btn-danger" type="button" id="button-addon2">Cerca</button>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
}
</script>

<style lang="scss" scoped></style>