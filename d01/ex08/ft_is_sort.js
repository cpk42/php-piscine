const ft_is_sort = (arr) => {
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] >= arr[i - 1])
            continue ;
        else
            return (false)
    }
    return (true)
}
