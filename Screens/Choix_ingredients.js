import React from 'react';
import { Text, View ,StyleSheet} from 'react-native';
import { TextInput } from 'react-native';


export default function Choix() {

    return (
        <View style={styles.Divers}>
           
           {/* Titre de la page */}
           <Text style = {styles.Titre}>Faites le choix de vos Preferences .</Text>

            {/* container de details */}
           <View style = {styles.Details}>

            {/* **************** 1 ************************/}
           <Text style = {styles.TitreD}>Fruits & Légumes</Text>
           {/* containeur de legume */}
           <View style = {styles.ListeImage}>

           </View>

            {/* **************** 2 ************************/}
            <Text style = {styles.TitreD}>Protéines</Text>
           {/* containeur de proteine */}
           <View style = {styles.ListeImage}>

           </View>

            {/* **************** 3 ************************/}
            <Text style = {styles.TitreD}>Matières Grasses</Text>
           {/* containeur de matiere grasse */}
           <View style = {styles.ListeImage}>

           </View>

             {/* **************** 4 ************************/}
             <Text style = {styles.TitreD}>Céreales</Text>
           {/* containeur de cereale */}
           <View style = {styles.ListeImage}>

           </View>

           {/* fin de liste */}
           </View>

           {/* fin de details */}

        </View>
    )
  
}
const styles = StyleSheet.create({
   
});