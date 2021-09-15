//
//  ContentView.swift
//  SwiftBlocks
//
//  Created by Hiep Nguyen on 9/14/21.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationView {
            Form {
                Section {
                    Text("Test")
                }
            }
                .navigationBarTitle(Text("swiftBlocks"))
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
