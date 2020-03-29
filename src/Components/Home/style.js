export default theme => ({
    root: {
        flexGrow: 1,
        padding: 0
    },
    paper: {
        padding: theme.spacing(2),
        // textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    spacer: {
        margin: '2% 0'
    },
    paddingClass: {
        padding: '0% 1%'
    },
    internalPadding: {
        padding: '6% 2%'
    },
    internalPaddingOnResult: {
        padding: '3% 2%'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: '70%',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    image: {
        width: '100%',
        textAlign: "center",
        marginTop: theme.spacing(2),
    }
});
