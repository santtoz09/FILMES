import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141a29',
        alignItems: "center",
    },

    containerFilmes: {
        paddingTop: 20,
        paddingBottom: 16,
        paddingRight: 16,
        width: 140
    },

    titulo: {
        color: '#fff',
        fontSize: 34,
        paddingTop: 10,
        fontWeight: 700
    },

    textNota: {
        fontWeight: 700,
        fontSize: 20,
        color: '#efcf00',
        paddingLeft: 4
    },

    ratingContainer: {
        width: '90%',
        marginTop: 16,
        alignItems: 'flex-start'
    },

    ratingLabel: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700'
    },

    ratingValue: {
        color: '#d2d5dc',
        fontSize: 14,
        marginTop: 4
    },

    sinopseTitulo: {
        width: '90%',
        marginTop: 20,
        color: '#fff',
        fontSize: 22,
        fontWeight: '700',
        textAlign: 'left'
    },

    sinopse: {
        width: '90%',
        marginTop: 8,
        marginBottom: 24,
        color: '#fff',
        fontSize: 18,
        lineHeight: 23,
        textAlign: 'left'
    },

    images: {
        marginTop: 30,
        width: '50%',
        height: 340,
        borderRadius: 12
    }
});

export default styles;